'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 transition-all duration-300"
        style={{
          background: 'rgba(15,21,16,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #2A3828' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="font-display text-xl tracking-wide" style={{ color: 'var(--cream)' }}>
          North <span style={{ color: 'var(--brass)' }}>&</span> Knot
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--cream-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream-muted)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block text-xs font-medium tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
          style={{ background: 'var(--brass)', color: 'var(--forest)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--brass-dark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--brass)')}
        >
          Commission a piece
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--cream)', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : '' }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--cream)', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--cream)', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : '' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed top-16 left-0 right-0 z-40 flex flex-col gap-5 px-6 py-6 md:hidden transition-all duration-300"
        style={{
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            onClick={close}
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--cream-muted)' }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          className="text-xs font-medium tracking-widest uppercase px-5 py-3 text-center mt-2"
          style={{ background: 'var(--brass)', color: 'var(--forest)' }}
        >
          Commission a piece
        </a>
      </div>
    </>
  );
}
