import { useScrollReveal } from '@/hooks/useScrollReveal';
import { UserPlus, Store, Package, Megaphone, Bot, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: '註冊電商平台賣家帳號',
    desc: '由我們專人協助您完成各大電商平台的賣家帳號申請，快速完成身份驗證。',
    step: '01',
  },
  {
    icon: Store,
    title: '開設店鋪完成',
    desc: '完成店鋪基本設定、品牌形象建立，打造專業的電商店鋪外觀。',
    step: '02',
  },
  {
    icon: Package,
    title: '專人選品銷售',
    desc: '市場調查團隊依據銷量與毛利率，為您精選最具競爭力的商品上架銷售。',
    step: '03',
  },
  {
    icon: Megaphone,
    title: '廣告引流',
    desc: '投放精準廣告，結合平台自有流量，為您的店鋪帶來穩定的買家訂單。',
    step: '04',
  },
  {
    icon: Bot,
    title: '操作 AI 系統處理銷售訂單',
    desc: '搭配 AI 智能系統自動化處理訂單，雲倉即時出貨，全程無需您親自操作。',
    step: '05',
  },
  {
    icon: DollarSign,
    title: '收益入帳',
    desc: '訂單完成後，收益直接入帳至您的帳戶，開始享受穩定的跨境電商被動收入。',
    step: '06',
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section id="process" ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)', border: '1px solid #4F46E5' }}>
            <span className="text-indigo-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>合作流程</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            六步驟，輕鬆開啟<span className="text-amber-500">電商副業</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            從零開始到收益入帳，全程專人陪伴，無需任何電商經驗
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #FBBF24, #4F46E5)' }} />

          <div className="flex flex-col gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`${isLeft ? 'reveal-left' : 'reveal-right'} flex items-center gap-6 lg:gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)' }}>
                          <Icon size={22} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-amber-500 mb-1" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                            STEP {step.step}
                          </div>
                          <div className="text-base font-bold text-gray-800 mb-2" style={{ fontFamily: 'Noto Serif TC, serif' }}>
                            {step.title}
                          </div>
                          <div className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0 z-10 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', border: '4px solid white' }}>
                    <span className="text-white text-xs font-bold">{step.step}</span>
                  </div>

                  {/* Empty side (desktop) */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 lg:mt-20 reveal rounded-2xl p-6 sm:p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)' }}>
          <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: 'Noto Serif TC, serif' }}>
            準備好開始了嗎？
          </h3>
          <p className="text-gray-400 mb-8" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            立即聯繫我們，讓專業顧問為您量身規劃合作方案
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-amber px-8 py-3.5 rounded-full text-base font-semibold"
          >
            立即免費諮詢
          </button>
        </div>
      </div>
    </section>
  );
}
