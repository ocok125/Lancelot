import { useEffect, useRef, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';

const stats = [
  { value: 500,   suffix: '+',  label: '合作夥伴',   sublabel: '來自台灣各地',     icon: '🤝' },
  { value: 98,    suffix: '%',  label: '客戶滿意度', sublabel: '真實回饋數據',     icon: '⭐' },
  { value: 16,    suffix: '',   label: '合作平台',   sublabel: '美國 + 瑞士市場',  icon: '🌐' },
  { value: 45000, suffix: '',   prefix: 'NT$', label: '平均月收益', sublabel: '合作夥伴實際數據', icon: '💰' },
];

function StatItem({
  value, suffix, prefix, label, sublabel, icon, start, delay,
}: {
  value: number; suffix: string; prefix?: string; label: string;
  sublabel: string; icon: string; start: boolean; delay: number;
}) {
  const count = useCounter(value, 2000, start);
  const display =
    value >= 1000
      ? count >= 1000
        ? `${Math.floor(count / 1000)},${String(count % 1000).padStart(3, '0')}`
        : count.toString()
      : count.toString();

  return (
    <div
      className="reveal flex flex-col items-center text-center px-4 py-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
        style={{
          background: 'rgba(245,158,11,0.15)',
          border: '1px solid rgba(245,158,11,0.3)',
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <div className="text-3xl lg:text-5xl font-bold mb-2 amber-number">
        {prefix}{display}{suffix}
      </div>

      {/* Label */}
      <div
        className="text-white text-base font-semibold mb-1"
        style={{ fontFamily: 'Noto Serif TC, serif' }}
      >
        {label}
      </div>

      {/* Sublabel */}
      <div
        className="text-gray-400 text-sm"
        style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
      >
        {sublabel}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            // Trigger reveal on child .reveal elements
            el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="py-14 lg:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)' }}
    >
      {/* Decorative top border */}
      <div
        className="h-px mb-0"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.5), rgba(79,70,229,0.5), transparent)',
        }}
      />

      <div className="container">
        {/* Section label */}
        <div
          className="reveal text-center mb-10"
          style={{ transitionDelay: '0ms' }}
        >
          <span
            className="text-amber-400 text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
          >
            — 核心數據 —
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              {...s}
              start={started}
              delay={80 + i * 80}
            />
          ))}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div
        className="h-px mt-0"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.5), rgba(79,70,229,0.5), transparent)',
        }}
      />
    </section>
  );
}
