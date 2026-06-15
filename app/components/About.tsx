'use client';
import Image from 'next/image';

const details = [
  { label: 'Location', value: 'Nairobi, Kenya' },
  { label: 'Lead time', value: '8 – 14 weeks' },
  { label: 'Commissions', value: 'Open' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
    >
      {/* Image */}
      <div className="relative">
        <div className="relative w-full aspect-[3/4] max-w-md">
          <Image
            src="https://images.unsplash.com/photo-1565600444102-65b7a7b09c10?w=800&q=80"
            alt="Craftsman at work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Accent border */}
        <div
          className="absolute -bottom-6 -right-6 w-3/5 aspect-square pointer-events-none hidden md:block"
          style={{ border: '2px solid var(--brass)', opacity: 0.25 }}
        />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--brass)' }}>About</span>
          <span className="block h-px w-10" style={{ background: 'var(--brass)', opacity: 0.4 }} />
        </div>

        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6" style={{ color: 'var(--white)' }}>
          Craft is a long<br />
          <em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>conversation</em>
          <br />with material
        </h2>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--cream-muted)' }}>
          I grew up watching my father repair furniture in our home in Kisumu. What started as weekend repair work became a twelve-year obsession with how wood moves, fails, and lasts.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--cream-muted)' }}>
          My workshop in Nairobi is small by design. I work alone or with one apprentice. Every piece has my hands on it from the first mark to the last coat of oil.
        </p>
        <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--cream-muted)' }}>
          I work primarily in East African hardwoods — Mvule, Elgon Olive, and Podo — alongside imported European Oak and Walnut for commissions that call for them.
        </p>

        <a
          href="#contact"
          className="inline-block text-xs font-medium tracking-widest uppercase px-7 py-4 transition-colors duration-200 mb-10"
          style={{ border: '1px solid var(--border-light)', color: 'var(--cream)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brass)'; e.currentTarget.style.color = 'var(--brass)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--cream)'; }}
        >
          Work with me
        </a>

        <div
          className="grid grid-cols-3 gap-4 pt-8 mt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {details.map(d => (
            <div key={d.label}>
              <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--brass)' }}>
                {d.label}
              </div>
              <div className="text-sm" style={{ color: 'var(--cream)' }}>
                {d.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
