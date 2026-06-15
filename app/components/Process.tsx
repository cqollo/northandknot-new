'use client';
import { processSteps } from '../data';

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-10" style={{ background: 'var(--surface)' }}>
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--brass)' }}>How I work</span>
          <span className="block h-px w-10" style={{ background: 'var(--brass)', opacity: 0.4 }} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4" style={{ color: 'var(--white)' }}>
          From conversation<br />to completed piece
        </h2>
        <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--cream-muted)' }}>
          Every commission follows the same careful path — no shortcuts, no compromises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: 'var(--border)' }}>
        {processSteps.map((step) => (
          <div
            key={step.numeral}
            className="group flex flex-col p-8 transition-colors duration-200"
            style={{ background: 'var(--surface-2)' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#222E22')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface-2)')}
          >
            <span
              className="font-display text-5xl leading-none mb-6 transition-colors duration-200"
              style={{ color: 'var(--border-light)' }}
            >
              {step.numeral}
            </span>
            <h3 className="font-display text-xl mb-3" style={{ color: 'var(--white)' }}>
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--cream-muted)' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
