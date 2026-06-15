'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects, categories } from '../data';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.cat === activeFilter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(8);
  };

  return (
    <section id="work" className="py-24 px-6 md:px-10">
      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--brass)' }}>Portfolio</span>
          <span className="block h-px w-10" style={{ background: 'var(--brass)', opacity: 0.4 }} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4" style={{ color: 'var(--white)' }}>
          Recent work
        </h2>
        <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--cream-muted)' }}>
          Browse by category or explore the full collection. Click any piece for details.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className="text-xs font-medium tracking-widest uppercase px-4 py-2 transition-all duration-200"
            style={{
              border: '1px solid',
              borderColor: activeFilter === cat ? 'var(--brass)' : 'var(--border)',
              color: activeFilter === cat ? 'var(--forest)' : 'var(--cream-muted)',
              background: activeFilter === cat ? 'var(--brass)' : 'transparent',
            }}
          >
            {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {visible.map((p) => (
          <div
            key={p.id}
            className="break-inside-avoid mb-4 relative overflow-hidden cursor-pointer group"
            onClick={() => setSelected(p)}
          >
            <div className="relative w-full" style={{ paddingBottom: p.id % 3 === 0 ? '125%' : p.id % 2 === 0 ? '75%' : '100%' }}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(15,21,16,0.96) 0%, transparent 55%)' }}
              >
                <span className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--brass)' }}>
                  {p.cat}
                </span>
                <span className="font-display text-lg leading-snug" style={{ color: 'var(--white)' }}>
                  {p.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount(v => v + 4)}
            className="text-xs font-medium tracking-widest uppercase px-8 py-4 transition-all duration-200"
            style={{ border: '1px solid var(--border-light)', color: 'var(--cream)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brass)'; e.currentTarget.style.color = 'var(--brass)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--cream)'; }}
          >
            Load more projects
          </button>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
