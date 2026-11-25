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
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

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

        {/* Gallery Grid - Photos displayed directly without zoom modal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-xl overflow-hidden bg-[#13151b] border border-[#20232d] shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-95"
                loading="lazy"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/40 to-transparent opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#c59a53] mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-stone-100 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-stone-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
