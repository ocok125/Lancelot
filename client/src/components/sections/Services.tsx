import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Warehouse, Megaphone, Bot, ShieldCheck, HeadphonesIcon } from 'lucide-react';

const WAREHOUSE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/9zNYWg6MmTygZM5G7rKZrc/services-warehouse-WkVQkPnnJjcJMt8pnuvY5H.webp';

const services = [
  {
    icon: Search,
    title: '選品服務',
    desc: '專業市場調查團隊持續分析各平台銷量與毛利率，每期精選高潛力商品，確保您的店鋪始終銷售最具競爭力的產品。',
    color: '#F59E0B',
  },
  {
    icon: Warehouse,
    title: '雲倉備貨',
    desc: '精選商品以現貨形式囤放至國外合作倉儲，採用雲倉模式經營，買家下單後即時聯絡倉儲發貨，完全不需要您自行包裝出貨。',
    color: '#4F46E5',
  },
  {
    icon: Megaphone,
    title: '廣告引流',
    desc: '結合平台自有客源與精準廣告投放策略，為您的店鋪帶來穩定且高質量的流量，大幅提升訂單轉換率。',
    color: '#10B981',
  },
  {
    icon: Bot,
    title: 'AI 訂單系統',
    desc: '搭配先進 AI 系統自動化處理銷售訂單，智能管理庫存、物流追蹤與客戶服務，讓運營效率最大化。',
    color: '#8B5CF6',
  },
  {
    icon: ShieldCheck,
    title: '零囤貨風險',
    desc: '採用雲倉模式，您無需預先購買任何庫存，徹底消除囤貨風險，讓您以最低成本開啟跨境電商事業。',
    color: '#EF4444',
  },
  {
    icon: HeadphonesIcon,
    title: '全程支援',
    desc: '從帳號申請、店鋪開設到日常運營，我們的專業顧問團隊全程陪伴，提供即時諮詢與問題解決服務。',
    color: '#F59E0B',
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="py-16 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #ffffff 100%)' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
            <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>服務優勢</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            為什麼選擇<span className="text-amber-500">家康</span>？
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            六大核心服務，讓您從零開始，輕鬆經營跨境電商
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — warehouse image */}
          <div className="reveal-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:sticky lg:top-24">
              <img src={WAREHOUSE_IMG} alt="Amazon FBA 倉儲" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)'
              }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>
                  美國 Amazon FBA 倉儲
                </div>
                <div className="text-white/80 text-sm" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  專業物流合作夥伴，確保快速出貨
                </div>
              </div>
            </div>
          </div>

          {/* Right — service cards */}
          <div className="grid grid-cols-1 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="reveal-right group p-5 rounded-xl border border-gray-100 bg-white hover:border-amber-300 hover:shadow-lg transition-all duration-200 cursor-default"
                  style={{
                    transitionDelay: `${80 + i * 80}ms`,
                    transform: 'scale(1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#F59E0B';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLElement).style.borderColor = '';
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${s.color}18` }}>
                      <Icon size={20} style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-800 mb-1" style={{ fontFamily: 'Noto Serif TC, serif' }}>{s.title}</div>
                      <div className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{s.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
