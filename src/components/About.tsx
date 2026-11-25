import React, { useRef, useState } from 'react';
import { Shield, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import barberVideo from '../assets/images/video barbeiro o martins.mp4';

export const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section id="sobre" className="py-24 bg-[#0c0d10] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Barbershop Video */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#2b2f3d] bg-[#14161f] shadow-2xl shadow-black/80 group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                playsInline
                loop
                controls
                preload="auto"
              >
                <source src={barberVideo} type="video/mp4" />
                <source src="/video.mp4" type="video/mp4" />
                <source src="/video-barbeiro-o-martins.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>

              {/* Sound toggle quick control button */}
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0d0f14]/85 hover:bg-[#181a22] border border-[#c59a53]/50 text-stone-200 text-xs backdrop-blur-md transition-all shadow-lg active:scale-95"
                title={isMuted ? 'Ativar áudio do vídeo' : 'Silenciar áudio'}
                aria-label={isMuted ? 'Ativar áudio' : 'Silenciar áudio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#c59a53]" />
                    <span className="text-[11px] font-mono text-stone-300">Ativar Som</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] font-mono text-emerald-300">Som Ativo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#c59a53] mb-3">
              <Shield className="w-4 h-4" />
              Tradição & Cuidado
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight leading-tight">
              MAIS QUE UM CORTE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c278] via-[#c59a53] to-[#8e6a2b]">
                UMA EXPERIÊNCIA.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              <p className="font-medium text-stone-200">
                “Uma história marcada pela tradição e pelo cuidado masculino.”
              </p>
              <p>
                A <strong>Barbearia O Martins</strong> une o cuidado clássico da barbearia a uma experiência moderna e prática. Um espaço pensado para quem valoriza o próprio estilo, gosta de se cuidar e busca um atendimento direto, confortável e profissional.
              </p>
              <p className="text-stone-400 text-sm">
                Criamos um refúgio masculino onde você encontra pontualidade, técnicas refinadas de corte e barba, e os melhores produtos para a sua manutenção diária.
              </p>
            </div>

            {/* Pillar checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-[#222530]">
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Atendimento direto pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Navalhete e toalha quente</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Ambiente climatizado e confortável</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#c59a53] shrink-0" />
                <span>Produtos selecionados para cabelo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
