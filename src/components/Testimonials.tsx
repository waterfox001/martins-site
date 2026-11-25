import React from 'react';
import { Star, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/barbershopData';

export const Testimonials: React.FC = () => {
  const googleReviewUrl = `https://www.google.com/maps/search/?api=1&query=Barbearia+O+Martins+Av.+Her%C3%A1clito+Gra%C3%A7a+710+Centro+Fortaleza`;

  // Discrete, elegant Google G icon
  const GoogleGIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-label="Google">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.3l3.7 2.9C6.2 7.2 8.9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.3C.6 9.3 0 11.6 0 14s.6 4.7 1.6 6.7l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.2-6.7-5.2L1.6 16C3.5 20.4 7.4 23 12 23z"
      />
    </svg>
  );

  return (
    <section className="py-20 bg-[#0e0f13] border-t border-[#1b1e27] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/30 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-3">
            <GoogleGIcon />
            <span>Avaliações Reais no Google</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-100 uppercase tracking-tight">
            O QUE NOSSOS CLIENTES <span className="text-[#c59a53]">DIZEM</span>
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-xl bg-[#14161c] border border-[#222530] flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Header: G do Google & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <GoogleGIcon />
                    <span className="text-xs text-stone-400 font-medium">Google</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[#d4a750]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4a750]" />
                    ))}
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-heading font-bold text-xl text-stone-100 uppercase tracking-wide">
                  {t.name}
                </h3>

                {/* Comment Text */}
                <p className="mt-3 text-stone-300 text-sm leading-relaxed font-light">
                  “{t.comment}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discrete Google Reviews CTA */}
        <div className="text-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#181a22] hover:bg-[#20232f] border border-[#2c3140] hover:border-[#c59a53] text-stone-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#c59a53]" />
            <span>AVALIAR NO GOOGLE</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
