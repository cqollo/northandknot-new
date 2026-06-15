import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-10" style={{ background: 'var(--surface)' }}>
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--brass)' }}>Testimonials</span>
          <span className="block h-px w-10" style={{ background: 'var(--brass)', opacity: 0.4 }} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4" style={{ color: 'var(--white)' }}>
          What clients say
        </h2>
        <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--cream-muted)' }}>
          From homeowners to architects and interior designers across East Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col p-8"
            style={{ borderLeft: '2px solid var(--brass)', background: 'var(--surface-2)' }}
          >
            <div
              className="font-display text-5xl leading-none mb-4"
              style={{ color: 'var(--brass)', opacity: 0.4 }}
            >
              "
            </div>
            <p
              className="text-sm leading-relaxed italic mb-6 flex-1"
              style={{ color: 'var(--cream-muted)' }}
            >
              {t.quote}
            </p>
            <div>
              <div className="text-sm font-medium" style={{ color: 'var(--cream)' }}>
                {t.author}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--cream-dim)' }}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
