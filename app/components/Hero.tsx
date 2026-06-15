'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(pct * 100, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress rule */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[60] transition-all duration-100"
        style={{ width: `${progress}%`, background: 'var(--brass)' }}
      />

      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-28 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(15,21,16,0.25) 0%, rgba(15,21,16,0.65) 55%, rgba(15,21,16,1) 100%),
              url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1800&q=85')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative max-w-5xl">
          <p
            className="text-xs font-medium tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--brass)' }}
          >
            Bespoke furniture & functional art — Nairobi
          </p>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
            style={{ color: 'var(--white)' }}
          >
            Wood shaped<br />
            by{' '}
            <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>patient</em>
            <br />hands.
          </h1>

          <p
            className="text-sm md:text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: 'var(--cream-muted)' }}
          >
            Heirloom-quality furniture built to last a lifetime. Every joint cut by hand. Every surface finished with care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#work"
              className="inline-block text-xs font-medium tracking-widest uppercase px-7 py-4 text-center transition-colors duration-200"
              style={{ background: 'var(--brass)', color: 'var(--forest)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--brass-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--brass)')}
            >
              View our work
            </a>
            <a
              href="#contact"
              className="inline-block text-xs font-medium tracking-widest uppercase px-7 py-4 text-center transition-colors duration-200"
              style={{ border: '1px solid var(--border-light)', color: 'var(--cream)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brass)'; e.currentTarget.style.color = 'var(--brass)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--cream)'; }}
            >
              Commission a piece
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
