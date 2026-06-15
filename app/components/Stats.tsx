import { stats } from '../data';

export default function Stats() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-px"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--border)' }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center py-10 px-4 text-center"
          style={{ background: 'var(--forest)' }}
        >
          <span
            className="font-display text-4xl md:text-5xl mb-2 leading-none"
            style={{ color: 'var(--brass)' }}
          >
            {s.num}
          </span>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--cream-muted)' }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
