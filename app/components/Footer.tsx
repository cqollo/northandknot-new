'use client';
const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-10"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg" style={{ color: 'var(--cream)' }}>
          North <span style={{ color: 'var(--brass)' }}>&</span> Knot
        </span>

        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--cream-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream-muted)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <span className="text-xs" style={{ color: 'var(--cream-dim)' }}>
          © {new Date().getFullYear()} North & Knot · Nairobi, Kenya
        </span>
      </div>
    </footer>
  );
}
