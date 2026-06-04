import { ChevronDown, TrendingUp, Package, ShoppingCart, Star } from 'lucide-react';
import PlatformLogo from '@/components/PlatformLogo';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/9zNYWg6MmTygZM5G7rKZrc/hero-bg-8beJZsgbhpfjJEauNWshai.webp';

const tags = ['美國&瑞士雙市場', 'AI 智能訂單', '零囤貨風險', '雲倉即時出貨', '廣告精準引流'];

const platformOrders = [
  { name: 'Amazon',  orders: '1,200+', color: '#FF9900', iconUrl: 'https://cdn.simpleicons.org/amazon/FF9900', imgUrl: undefined },
  { name: 'eBay',    orders: '850+',   color: '#E53238', iconUrl: 'https://cdn.simpleicons.org/ebay/E53238',   imgUrl: undefined },
  { name: 'Walmart', orders: '620+',   color: '#0071CE', iconUrl: 'https://cdn.simpleicons.org/walmart/0071CE', imgUrl: undefined },
  { name: 'Zalando', orders: '430+',   color: '#FF6900', iconUrl: 'https://cdn.simpleicons.org/zalando/FF6900', imgUrl: undefined },
  { name: 'Galaxus', orders: '380+',   color: '#333333', iconUrl: null, imgUrl: '/manus-storage/logo-galaxus_f5a22929.png' },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProcess = () => {
    document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex flex-col items-stretch overflow-hidden">
      {/* Left panel — image + text */}
      <div className="relative w-full flex flex-col justify-center pt-24 pb-10 lg:pt-20 lg:pb-16 px-6 sm:px-8 lg:px-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(15,10,0,0.85) 0%, rgba(30,27,75,0.75) 100%)'
        }} />

        {/* Content */}
        <div className="relative z-10">
          {/* Company badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(251,191,36,0.2)', border: '1px solid rgba(251,191,36,0.5)', color: '#FBBF24', fontFamily: 'Noto Sans TC, sans-serif' }}>
              <Star size={12} fill="#FBBF24" />
              家康國際貿易有限公司
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontFamily: 'Noto Sans TC, sans-serif' }}>
              統編 96751057
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-white mb-4 leading-tight"
            style={{ fontFamily: 'Noto Serif TC, serif', fontSize: 'clamp(2rem, 6vw, 3.8rem)', fontWeight: 900 }}>
            跨境電商<br />
            <span style={{ color: '#FBBF24' }}>代運營專家</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base lg:text-lg mb-6 max-w-md leading-relaxed"
            style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            商品貨源與客源，一切都不用擔心
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'Noto Sans TC, sans-serif',
                  backdropFilter: 'blur(4px)',
                }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={scrollToContact}
              className="btn-amber px-6 sm:px-8 py-3.5 rounded-full text-base font-semibold text-center"
            >
              免費諮詢合作
            </button>
            <button
              onClick={scrollToProcess}
              className="btn-outline-white px-6 sm:px-8 py-3.5 rounded-full text-base font-semibold text-center"
            >
              了解合作流程
            </button>
          </div>

          {/* Scroll indicator — hidden on mobile to save space */}
          <div className="mt-10 hidden sm:flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 text-white/50 text-xs" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              <ChevronDown size={16} style={{ animation: 'scrollBounce 1.5s ease-in-out infinite' }} />
              SCROLL
            </div>
          </div>
        </div>
      </div>

      {/* Mobile data summary strip — visible only on mobile */}
      <div className="lg:hidden w-full px-4 py-5 relative z-10"
        style={{ background: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)' }}>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400" style={{ fontFamily: 'Noto Serif TC, serif' }}>+247</div>
            <div className="text-xs text-white/60 mt-0.5" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>今日新增訂單</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl font-bold text-indigo-400" style={{ fontFamily: 'Noto Serif TC, serif' }}>16</div>
            <div className="text-xs text-white/60 mt-0.5" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>合作平台</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400" style={{ fontFamily: 'Noto Serif TC, serif' }}>500+</div>
            <div className="text-xs text-white/60 mt-0.5" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>合作夥伴</div>
          </div>
        </div>
      </div>

    </section>
  );
}
