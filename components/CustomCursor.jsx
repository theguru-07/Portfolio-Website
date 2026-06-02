'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (ringRef.current) ringRef.current.classList.add('cursor-grow');
    };
    const onLeaveLink = () => {
      if (ringRef.current) ringRef.current.classList.remove('cursor-grow');
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    // Hide default cursor globally
    document.documentElement.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 w-9 h-9 rounded-full border border-sky-400/60 pointer-events-none z-[9998] transition-[width,height,border-color] duration-200"
        style={{ willChange: 'transform' }}
      />

      <style jsx global>{`
        .cursor-ring.cursor-grow {
          width: 52px;
          height: 52px;
          border-color: rgba(168, 85, 247, 0.8);
          margin-left: -8px;
          margin-top: -8px;
        }
        * { cursor: none !important; }
      `}</style>
    </>
  );
}
