'use client';

import { useState, useEffect } from 'react';

const roles = [
  'MERN Stack Engineer',
  'Next.js Developer',
  'Full Stack Developer',
  'React Developer',
  'Cloudflare Workers Dev',
  'AI Integration Builder',
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="text-yellow-400">
      Web Developer{' '}
      <span className="text-sky-300">
        • {displayed}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
}
