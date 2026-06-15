'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '../types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
        style={{ background: 'var(--surface)' }}
      >
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto min-h-[260px]">
          <Image
            src={project.img}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-7">
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--brass)' }}
          >
            {project.cat.charAt(0).toUpperCase() + project.cat.slice(1)}
          </span>
          <h3
            className="font-display text-2xl md:text-3xl leading-tight"
            style={{ color: 'var(--white)' }}
          >
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--cream-muted)' }}>
            {project.desc}
          </p>

          <div
            className="mt-auto pt-5 flex flex-col gap-3"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {[
              { label: 'Wood', value: project.wood },
              { label: 'Build time', value: project.time },
              { label: 'Size', value: project.size },
            ].map((m) => (
              <div key={m.label} className="flex justify-between text-sm">
                <span style={{ color: 'var(--cream-muted)' }}>{m.label}</span>
                <span className="font-medium" style={{ color: 'var(--cream)' }}>{m.value}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-4 text-xs font-medium tracking-widest uppercase py-3 text-center transition-colors duration-200"
            style={{ background: 'var(--brass)', color: 'var(--forest)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--brass-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--brass)')}
          >
            Commission something similar
          </a>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-lg transition-colors duration-200"
          style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--cream-muted)' }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
