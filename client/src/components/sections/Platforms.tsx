import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PlatformLogo from '@/components/PlatformLogo';
import { ALL_PLATFORMS, US_PLATFORMS, CH_PLATFORMS } from '@/lib/platforms';

const PORT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/9zNYWg6MmTygZM5G7rKZrc/platforms-port-9CyiKiMHk9CCvDjgT9wJAy.webp';

function PlatformCard({ name, color, bg, iconUrl, imgUrl, letter }: {
  name: string; color: string; bg: string; iconUrl: string | null; imgUrl?: string; letter?: string;
}) {
  return (
    <div
      className="platform-card flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl flex-shrink-0 cursor-default"
      style={{
        background: bg,
        border: `1.5px solid ${color}30`,
        minWidth: '80px',
        transition: 'transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1), border-color 220ms',
        // CSS custom property for glow color
        ['--glow' as string]: color,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'scale(1.12) translateY(-4px)';
        el.style.boxShadow = `0 8px 28px ${color}55, 0 0 0 2px ${color}40`;
        el.style.borderColor = `${color}80`;
        const icon = el.querySelector('.platform-icon-wrap') as HTMLElement | null;
        if (icon) {
          icon.style.background = `${color}30`;
          icon.style.boxShadow = `0 0 16px ${color}70`;
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'scale(1) translateY(0)';
        el.style.boxShadow = 'none';
        el.style.borderColor = `${color}30`;
        const icon = el.querySelector('.platform-icon-wrap') as HTMLElement | null;
        if (icon) {
          icon.style.background = `${color}18`;
          icon.style.boxShadow = 'none';
        }
      }}
    >
      {/* Icon area */}
      <div
        className="platform-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
        style={{
          background: `${color}18`,
          transition: 'background 220ms, box-shadow 220ms',
        }}
      >
        <PlatformLogo name={name} color={color} iconUrl={iconUrl} imgUrl={imgUrl} letter={letter} size={imgUrl ? 40 : 28} />
      </div>
      {/* Name */}
      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{ color, fontFamily: 'Noto Sans TC, sans-serif' }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Platforms() {
  const ref = useScrollReveal();
  const marqueeItems = [...ALL_PLATFORMS, ...ALL_PLATFORMS];

  return (
    <section id="platforms" ref={ref} className="py-16 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #ffffff 100%)' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
            <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>合作平台</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            進駐全球主流<span className="text-amber-500">電商平台</span>
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            美國 10 大平台 + 瑞士 6 大平台，覆蓋全球主要市場
          </p>
        </div>

        {/* Image + stats */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 lg:mb-16">
          {/* Left — port image */}
          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={PORT_IMG} alt="國際貨運港口" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)'
              }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white text-lg font-bold mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>
                  全球物流網絡
                </div>
                <div className="text-white/80 text-sm" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  覆蓋美國、瑞士等主要市場，快速觸達全球買家
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats + labels */}
          <div className="reveal space-y-6" style={{ transitionDelay: '150ms' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl text-center"
                style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
                <div className="text-4xl font-bold text-amber-600 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>10</div>
                <div className="text-sm font-semibold text-amber-700 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>美國電商平台</div>
                <div className="text-xs text-amber-600" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>Amazon、eBay、Walmart 等</div>
              </div>
              <div className="p-6 rounded-2xl text-center"
                style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)', border: '1px solid #4F46E5' }}>
                <div className="text-4xl font-bold text-indigo-600 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>6</div>
                <div className="text-sm font-semibold text-indigo-700 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>瑞士電商平台</div>
                <div className="text-xs text-indigo-600" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>Galaxus、Zalando 等</div>
              </div>
            </div>
            <div className="p-5 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #111827, #1e1b4b)' }}>
              <div className="text-amber-400 text-sm font-semibold mb-2" style={{ fontFamily: 'Noto Serif TC, serif' }}>為什麼選擇多平台佈局？</div>
              <ul className="space-y-2">
                {['分散單一平台風險，穩定收益來源', '覆蓋更廣泛的消費者群體', '不同平台競爭強度各異，利潤空間更大'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                    <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* US Platforms */}
        <div className="reveal mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">🇺🇸</span>
            <span className="text-base font-bold text-gray-700" style={{ fontFamily: 'Noto Serif TC, serif' }}>美國市場 — 10 大平台</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #F59E0B, transparent)' }} />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
            {US_PLATFORMS.map((p) => (
              <PlatformCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* CH Platforms */}
        <div className="reveal" style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">🇨🇭</span>
            <span className="text-base font-bold text-gray-700" style={{ fontFamily: 'Noto Serif TC, serif' }}>瑞士市場 — 6 大平台</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #4F46E5, transparent)' }} />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
            {CH_PLATFORMS.map((p) => (
              <PlatformCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Marquee strip — with logos */}
        <div className="reveal mt-8 lg:mt-12 overflow-hidden rounded-2xl py-4 sm:py-5"
          style={{ background: 'linear-gradient(135deg, #111827, #1e1b4b)' }}>
          <div className="marquee-track">
            {marqueeItems.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 flex-shrink-0 rounded-xl py-1.5"
                style={{ transition: 'background 200ms, transform 200ms cubic-bezier(0.23,1,0.32,1)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${p.color}20`;
                  el.style.transform = 'scale(1.08)';
                  const icon = el.querySelector('.marquee-icon') as HTMLElement | null;
                  if (icon) icon.style.boxShadow = `0 0 10px ${p.color}90`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'transparent';
                  el.style.transform = 'scale(1)';
                  const icon = el.querySelector('.marquee-icon') as HTMLElement | null;
                  if (icon) icon.style.boxShadow = 'none';
                }}
              >
                {/* Mini logo */}
                <div
                  className="marquee-icon w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${p.color}25`,
                    transition: 'box-shadow 200ms',
                  }}
                >
                  <PlatformLogo
                    name={p.name}
                    color={p.color}
                    iconUrl={p.iconUrl}
                    imgUrl={p.imgUrl}
                    letter={p.letter}
                    size={p.imgUrl ? 20 : 14}
                  />
                </div>
                <span className="text-white/80 text-sm whitespace-nowrap font-medium" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  {p.name}
                </span>
                {/* Separator */}
                <span className="text-white/20 ml-2">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
