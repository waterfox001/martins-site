import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/barbershopData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'cortes' | 'barba' | 'ambiente' | 'produtos'>('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'barba', label: 'Barba' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'produtos', label: 'Produtos' },
  ];

  const filteredItems =
    activeFilter === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => {
          const categories = Array.isArray(item.category) ? item.category : [item.category];
          return categories.includes(activeFilter);
        });

  return (
    <section id="galeria" className="py-24 bg-[#0a0b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-[#c59a53] block mb-2">
            Portfólio Visual
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight">
            NOSSO <span className="text-[#c59a53]">ESTILO</span>
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            Ambiente pensado para o homem moderno, cortes de precisão e acabamento impecável.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#c59a53] text-stone-950 shadow-md'
                    : 'bg-[#15171e] text-stone-400 hover:text-stone-200 border border-[#242834]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky stacking cards keep paired and finalization photos together. */}
        <div className="relative mt-10 pb-[35vh]">
          {filteredItems.map((item, index) => {
            const photos: { image: string; alt: string; label?: string }[] = 'images' in item && item.images
              ? item.images
              : 'image' in item && item.image
                ? [{ image: item.image, alt: item.title }]
                : [];
            const isBeforeAfter = 'layout' in item && item.layout === 'before-after';
            const isFinalization = 'layout' in item && item.layout === 'finalizations';

            return (
              <article
                key={item.id}
                className="sticky mb-8 overflow-hidden rounded-2xl border border-[#282b35] bg-[#101216]/95 shadow-2xl shadow-black/50 backdrop-blur-sm motion-safe:transition-transform motion-safe:duration-500"
                style={{
                  top: `${84 + Math.min(index, 8) * 12}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="flex items-center justify-between gap-4 px-4 pt-4 sm:px-6 sm:pt-5">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c59a53]">
                      {isBeforeAfter ? 'Transformação' : isFinalization ? 'Finalizações' : 'Produtos'}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold uppercase tracking-wide text-stone-100 sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  {isBeforeAfter && (
                    <span className="shrink-0 rounded-full border border-[#c59a53]/40 bg-[#c59a53]/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#e5c278]">
                      Antes / Depois
                    </span>
                  )}
                </div>

                <div className={`grid ${photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2 p-3 sm:gap-4 sm:p-5`}>
                  {photos.map((photo, photoIndex) => (
                    <div
                      key={`${item.id}-${photoIndex}`}
                      className={`group relative overflow-hidden rounded-xl border border-[#232631] bg-[#090a0d] ${
                        photos.length === 1 ? 'mx-auto aspect-[4/3] w-full max-w-3xl' : 'aspect-[3/4]'
                      }`}
                    >
                      <img
                        src={photo.image}
                        alt={photo.alt}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      {(photo.label || isFinalization) && (
                        <span className="absolute bottom-2 left-2 rounded-full border border-[#c59a53]/35 bg-[#0c0d10]/80 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-stone-100 shadow-lg backdrop-blur sm:bottom-3 sm:left-3 sm:px-3 sm:text-[10px]">
                          {photo.label || 'Finalização'}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {'caption' in item && item.caption && (
                  <p className="px-4 pb-4 text-xs text-stone-400 sm:px-6 sm:pb-5">
                    {item.caption}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
