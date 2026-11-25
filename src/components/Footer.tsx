import React from 'react';
import { MessageCircle, Phone, Mail, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/barbershopData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer id="contato" className="bg-[#08090b] text-stone-300 border-t border-[#1d202b] pt-16 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1c1f2a]">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="horizontal" />
            <p className="text-[#d4a750] font-heading font-semibold text-base uppercase tracking-wider">
              {BUSINESS_INFO.slogan}
            </p>
            <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              Corte masculino de precisão, barboterapia tradicional e linha de produtos selecionados no Centro de Fortaleza.
            </p>
          </div>

          {/* Col 3: Navegação */}
          <div>
            <h4 className="font-heading font-bold text-stone-100 uppercase tracking-wider text-sm mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#d4a750] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Atendimento (Horários) */}
          <div>
            <h4 className="font-heading font-bold text-stone-100 uppercase tracking-wider text-sm mb-4">
              ATENDIMENTO
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div>
                <span className="block text-stone-200 font-medium">Segunda a sexta:</span>
                <span className="font-mono text-xs">{BUSINESS_INFO.openingHours.weekdays}</span>
              </div>
              <div>
                <span className="block text-stone-200 font-medium">Sábado:</span>
                <span className="font-mono text-xs">{BUSINESS_INFO.openingHours.saturday}</span>
              </div>
              <div>
                <span className="block text-stone-400">Domingo:</span>
                <span className="text-rose-400 text-xs font-mono">{BUSINESS_INFO.openingHours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Col 5: Contato & Localização */}
          <div>
            <h4 className="font-heading font-bold text-stone-100 uppercase tracking-wider text-sm mb-4">
              CONTATO & LOCALIZAÇÃO
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    'Olá! Gostaria de falar com a Barbearia O Martins.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{BUSINESS_INFO.whatsappFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+5585992353320`}
                  className="hover:text-[#d4a750] flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c59a53] shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-stone-200 flex items-center gap-2 truncate"
                >
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="truncate">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="pt-2 border-t border-[#1a1d27]">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4a750] flex items-start gap-2 text-xs"
                >
                  <MapPin className="w-4 h-4 text-[#c59a53] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row: Exact copyright line with Localway credit BELOW */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-400">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="text-stone-300">
              © 2026 Barbearia O Martins. Todos os direitos reservados.
            </p>
            <p className="text-stone-400 text-xs">
              Site desenvolvido por{' '}
              <a
                href="https://localway.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c59a53] hover:text-[#d4af37] font-medium transition-colors underline-offset-2 hover:underline"
              >
                Localway
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#d4a750] transition-colors"
            >
              Política de Privacidade
            </button>
            <span className="text-stone-700">•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#d4a750] transition-colors"
            >
              Termos de Uso
            </button>
            <span className="text-stone-700">•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-[#161821] hover:bg-[#20232f] text-stone-300 hover:text-white transition-colors"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
