import { useEffect, useState } from 'react';

const LOGO_URL = '/manus-storage/jiaakon-logo-transparent_777796f9.png';

export default function PageSplash() {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    let raf: number;
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / duration, 1);
      // Ease-out curve
      setProgress(Math.round(1 - Math.pow(1 - pct, 3)) * 100);
      if (pct < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Phase transitions
    const t1 = setTimeout(() => setPhase('hold'), 200);
    const t2 = setTimeout(() => setPhase('exit'), 1700);
    const t3 = setTimeout(() => setPhase('done'), 2200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === 'done') return null;

  const isExiting = phase === 'exit';

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0700 0%, #1a0e00 40%, #1e1b4b 100%)',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.04)' : 'scale(1)',
        transition: isExiting
          ? 'opacity 500ms cubic-bezier(0.4,0,1,1), transform 500ms cubic-bezier(0.4,0,1,1)'
          : 'none',
        pointerEvents: isExiting ? 'none' : 'all',
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div
        className="flex flex-col items-center gap-7 relative z-10"
        style={{
          animation: 'splashContentIn 600ms cubic-bezier(0.23,1,0.32,1) forwards',
        }}
      >
        {/* Logo image */}
        <div
          style={{
            animation: 'splashLogoFadeIn 900ms 100ms cubic-bezier(0.23,1,0.32,1) both',
          }}
        >
          <img
            src={LOGO_URL}
            alt="家康國際貿易有限公司"
            className="h-16 w-auto object-contain"
            style={{
              maxWidth: '240px',
            }}
          />
        </div>

        {/* Divider line */}
        <div
          className="h-px"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.6), transparent)',
            animation: 'splashLineIn 600ms 300ms cubic-bezier(0.23,1,0.32,1) both',
            width: '200px',
          }}
        />

        {/* Subtitle */}
        <div
          className="text-center"
          style={{
            animation: 'splashTextIn 600ms 400ms cubic-bezier(0.23,1,0.32,1) both',
          }}
        >
          <div
            className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-1"
            style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
          >
            JIAKON TRADING CO., LTD.
          </div>
          <div
            className="text-white/50 text-xs tracking-widest"
            style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
          >
            跨境電商代運營專家
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: '160px',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            animation: 'splashTextIn 400ms 500ms both',
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(to right, #FBBF24, #F59E0B)',
              transition: 'width 80ms linear',
              boxShadow: '0 0 8px rgba(245,158,11,0.8)',
            }}
          />
        </div>

        {/* Loading dots */}
        <div
          className="flex gap-1.5"
          style={{ animation: 'splashTextIn 400ms 600ms both' }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#F59E0B',
                animation: `bounceDot 1.1s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
