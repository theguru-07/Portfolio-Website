'use client';

import { useEffect, useRef, useCallback } from 'react';

const MAX_POINTS  = 48;
const FADE_SPEED  = 0.032;  // how fast each point fades out
const BRUSH_WIDTH = 14;     // max brush width at full pressure
const MIN_WIDTH   = 2;      // min brush width (tip of stroke)

export default function InkBrushCursor() {
  const canvasRef  = useRef(null);
  const pointsRef  = useRef([]);
  const rafRef     = useRef(0);
  const prevRef    = useRef(null);
  const dotRef     = useRef(null);

  const onMove = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Move nib dot
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
    }

    // Compute speed for pressure simulation
    let pressure = 0.7;
    let angle = 0;
    if (prevRef.current) {
      const dx = x - prevRef.current.x;
      const dy = y - prevRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      // Faster movement → thinner stroke (less pressure)
      pressure = Math.max(0.15, Math.min(1, 1 - speed / 60));
      angle = Math.atan2(dy, dx);
    }
    prevRef.current = { x, y };

    pointsRef.current.push({ x, y, age: 0, pressure, angle });
    if (pointsRef.current.length > MAX_POINTS) {
      pointsRef.current.shift();
    }
  }, []);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pts = pointsRef.current;

    // Age all points
    for (let i = 0; i < pts.length; i++) {
      pts[i].age += FADE_SPEED;
    }
    // Remove fully faded
    while (pts.length > 0 && pts[0].age >= 1) pts.shift();

    if (pts.length < 2) {
      rafRef.current = requestAnimationFrame(render);
      return;
    }

    // Draw brush segments between consecutive points
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];

      const alpha = (1 - curr.age) * 0.88;
      if (alpha <= 0) continue;

      const t = i / pts.length; // position along trail (0=oldest, 1=newest)
      const w = MIN_WIDTH + (BRUSH_WIDTH - MIN_WIDTH) * curr.pressure * t;

      // Calligraphy effect: brush is wider perpendicular to stroke angle
      const perpAngle = curr.angle + Math.PI / 2;
      const ox = Math.cos(perpAngle) * w * 0.5;
      const oy = Math.sin(perpAngle) * w * 0.5;

      ctx.beginPath();
      // Draw a quadrilateral (brush shape) instead of a round stroke
      ctx.moveTo(prev.x + ox, prev.y + oy);
      ctx.lineTo(curr.x + ox, curr.y + oy);
      ctx.lineTo(curr.x - ox, curr.y - oy);
      ctx.lineTo(prev.x - ox, prev.y - oy);
      ctx.closePath();

      // Rose/hot pink ink with slight variation per segment for a watery look
      const lightness = 45 + Math.round((1 - curr.pressure) * 20);
      ctx.fillStyle = `hsla(330, 85%, ${lightness}%, ${alpha})`;
      ctx.fill();

      // Tiny feathered edge — re-draw center line slightly darker
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(curr.x, curr.y);
      ctx.strokeStyle = `hsla(330, 90%, 30%, ${alpha * 0.4})`;
      ctx.lineWidth = Math.max(0.5, w * 0.3);
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    rafRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', onMove);
    document.documentElement.style.cursor = 'none';

    rafRef.current = requestAnimationFrame(render);

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
      document.documentElement.style.cursor = '';
    };
  }, [onMove, render]);

  return (
    <>
      {/* Full-screen canvas for the ink trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ willChange: 'transform' }}
      />

      {/* Nib dot — the sharp tip of the brush */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#9d174d',  // rose-900
          willChange: 'transform',
          mixBlendMode: 'multiply',
        }}
      />

      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
    </>
  );
}