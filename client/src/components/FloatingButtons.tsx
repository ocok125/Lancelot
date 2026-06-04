import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      className="fixed z-50 flex flex-col items-end gap-2 sm:gap-3"
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))',
        right: '1rem',
      }}
    >
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="回到頂部"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        style={{
          background: 'white',
          border: '2px solid #F59E0B',
          color: '#F59E0B',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
          pointerEvents: showTop ? 'auto' : 'none',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = '#F59E0B';
          (e.currentTarget as HTMLElement).style.color = 'white';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'white';
          (e.currentTarget as HTMLElement).style.color = '#F59E0B';
        }}
      >
        <ArrowUp size={16} />
      </button>

      {/* Consult button — icon only on mobile, full text on sm+ */}
      <button
        onClick={scrollToContact}
        aria-label="立即諮詢"
        className="flex items-center justify-center gap-2 rounded-full shadow-xl transition-all duration-200 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
          color: 'white',
          fontFamily: 'Noto Sans TC, sans-serif',
          fontSize: '0.875rem',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(245,158,11,0.45)',
          padding: '0',
          width: '2.75rem',
          height: '2.75rem',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(245,158,11,0.55)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(245,158,11,0.45)';
        }}
      >
        {/* Mobile: icon only */}
        <span className="sm:hidden flex items-center justify-center">
          <MessageCircle size={20} />
        </span>
        {/* Desktop: icon + text */}
        <span
          className="hidden sm:flex items-center gap-2"
          style={{ padding: '0.75rem 1.25rem', width: 'auto', height: 'auto' }}
        >
          <MessageCircle size={18} />
          立即免費諮詢
        </span>
      </button>
    </div>
  );
}
