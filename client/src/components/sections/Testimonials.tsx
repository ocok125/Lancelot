import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';
import EarningsScreenshot from '@/components/EarningsScreenshot';

const testimonials = [
  {
    name: '陳○宏',
    city: '台北市',
    income: 'NT$52,000',
    rating: 5,
    text: '原本對跨境電商完全沒概念，加入家康後，專人全程指導，三個月就開始有穩定收益，現在每個月都有五萬多的被動收入！',
    avatar: '陳',
    color: '#F59E0B',
  },
  {
    name: '林○婷',
    city: '高雄市',
    income: 'NT$38,000',
    rating: 5,
    text: '身為上班族，完全不用花太多時間，AI 系統幫我處理大部分訂單，家康的服務非常專業，強烈推薦！',
    avatar: '林',
    color: '#4F46E5',
  },
  {
    name: '王○明',
    city: '台中市',
    income: 'NT$45,000',
    rating: 5,
    text: '最擔心的囤貨問題完全不存在，雲倉模式讓我零風險開始，現在在 Amazon 和 eBay 都有穩定訂單。',
    avatar: '王',
    color: '#10B981',
  },
  {
    name: '張○雯',
    city: '新北市',
    income: 'NT$41,000',
    rating: 5,
    text: '家康的廣告引流效果非常好，店鋪開業第二個月就開始盈利，客服團隊也很有耐心，有問題都能快速解決。',
    avatar: '張',
    color: '#8B5CF6',
  },
  {
    name: '劉○傑',
    city: '桃園市',
    income: 'NT$33,000',
    rating: 5,
    text: '瑞士市場競爭沒那麼激烈，家康幫我進駐 Galaxus 和 Zalando，利潤率比想像中高很多，很滿意！',
    avatar: '劉',
    color: '#EF4444',
  },
  {
    name: '吳○珊',
    city: '台南市',
    income: 'NT$29,000',
    rating: 5,
    text: '剛開始只是想試試看，沒想到效果這麼好。家康的選品真的很精準，商品上架後很快就有訂單，推薦給想增加收入的朋友！',
    avatar: '吳',
    color: '#F59E0B',
  },
];

const trustBadges = [
  { label: '合法立案公司', sublabel: '統編 96751057', icon: '🏢' },
  { label: '500+ 合作夥伴', sublabel: '來自台灣各地', icon: '👥' },
  { label: '98% 滿意度', sublabel: '真實客戶回饋', icon: '⭐' },
  { label: '全程免費諮詢', sublabel: '專人一對一服務', icon: '📞' },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" ref={ref} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
            <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>客戶見證</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            真實夥伴，<span className="text-amber-500">真實收益</span>
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            來自台灣各地的真實合作夥伴分享
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="reveal-zoom p-5 rounded-2xl border border-gray-100 bg-white transition-all duration-200 cursor-default"
                style={{
                  transitionDelay: `${80 + i * 90}ms`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'scale(1.04) translateY(-4px)';
                  el.style.borderColor = '#F59E0B';
                  el.style.boxShadow = '0 12px 32px rgba(245,158,11,0.15)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = '';
                  el.style.borderColor = '';
                  el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#F59E0B" className="text-amber-400" />
                  ))}
                </div>
                {/* Text */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4"
                  style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  「{t.text}」
                </p>
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Noto Serif TC, serif' }}>{t.name}</div>
                      <div className="text-xs text-gray-400" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{t.city}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>月收益</div>
                    <div className="text-sm font-bold text-amber-500" style={{ fontFamily: 'Noto Serif TC, serif' }}>{t.income}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* Right — earnings screenshot + trust badges */}
          <div className="reveal-right" style={{ transitionDelay: '200ms' }}>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-gray-600" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>合作夥伴實際後台截圖（示意）</span>
              </div>
              <EarningsScreenshot />
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="p-4 rounded-xl border border-amber-100 text-center transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default"
                  style={{ background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' }}
                >
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <div className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>{b.label}</div>
                  <div className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{b.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
