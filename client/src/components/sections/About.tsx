import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Warehouse, Bot, Megaphone } from 'lucide-react';

const ABOUT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/9zNYWg6MmTygZM5G7rKZrc/about-team-MF8wxJiT5uEQSsEe2zaccG.webp';

const advantages = [
  { icon: Search, title: '市場調查', desc: '專業團隊持續分析各平台銷量與毛利率，精選高潛力商品' },
  { icon: Warehouse, title: '雲倉備貨', desc: '商品現貨囤放至國外倉儲，買家下單即時發貨，零囤貨壓力' },
  { icon: Bot, title: 'AI 訂單系統', desc: '智能化訂單處理系統，自動化管理，大幅提升運營效率' },
  { icon: Megaphone, title: '廣告引流', desc: '精準廣告投放策略，為您的店鋪帶來穩定且高質量的客源' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="relative reveal-left">
            {/* On mobile: add padding to prevent floating cards from clipping */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] mx-2 sm:mx-6 lg:mx-0">
              <img src={ABOUT_IMG} alt="家康國際貿易團隊" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)'
              }} />
            </div>
            {/* Floating stat card — desktop only */}
            <div className="hidden sm:block absolute -bottom-5 right-0 sm:-right-2 lg:-right-6 glass-card rounded-2xl p-4 shadow-xl">
              <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>統一編號</div>
              <div className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Noto Serif TC, serif' }}>96751057</div>
              <div className="text-xs text-amber-600 mt-1" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>合法立案・誠信經營</div>
            </div>
            {/* Address card — desktop only */}
            <div className="hidden sm:block absolute -top-3 left-0 sm:-left-2 lg:-left-4 glass-card rounded-xl p-3 shadow-lg max-w-[200px]">
              <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>公司地址</div>
              <div className="text-xs text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                高雄市三民區<br />博愛一路287號7樓
              </div>
            </div>
            {/* Mobile info strip */}
            <div className="sm:hidden mt-4 flex gap-3 mx-2">
              <div className="flex-1 p-3 rounded-xl text-center"
                style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
                <div className="text-xs text-amber-700 font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>統一編號</div>
                <div className="text-sm font-bold text-amber-800 mt-0.5" style={{ fontFamily: 'Noto Serif TC, serif' }}>96751057</div>
              </div>
              <div className="flex-1 p-3 rounded-xl text-center"
                style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)', border: '1px solid #4F46E5' }}>
                <div className="text-xs text-indigo-700 font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>公司地址</div>
                <div className="text-xs font-medium text-indigo-800 mt-0.5 leading-tight" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>高雄市三民區<br />博愛一路287號7樓</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal-right" style={{ transitionDelay: '150ms' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
              <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>關於我們</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: 'Noto Serif TC, serif' }}>
              專業跨境電商<br />
              <span className="text-amber-500">代運營服務</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              家康國際貿易有限公司，專注於跨境電商代運營服務。我們協助客戶在全球主流電商平台上開設並經營店鋪，從選品、備貨、廣告投放到訂單處理，提供一站式全程服務。
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              無需任何電商經驗，無需囤貨，無需承擔庫存風險。我們的專業團隊將為您打理一切，讓您輕鬆開啟副業生活，享受穩定的跨境電商收益。
            </p>

            {/* Advantage cards — 1 col on xs, 2 col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {advantages.map(({ icon: Icon, title, desc }) => (
                <div key={title}
                  className="p-4 rounded-xl border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-200 group"
                  style={{ background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)' }}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>{title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
