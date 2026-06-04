import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: '加入需要準備多少資金？',
    a: '加入家康跨境電商代運營服務，您不需要預先購買任何庫存，我們採用雲倉模式，商品由我們統一備貨至海外倉儲。您只需要準備基本的帳號申請費用及廣告預算，具體金額請聯繫我們的顧問進行一對一評估。',
  },
  {
    q: '完全沒有電商經驗可以加入嗎？',
    a: '完全可以！家康提供全程新手友善的服務，從帳號申請、店鋪設定、商品上架到訂單管理，我們的專業團隊會一步步指導您。許多合作夥伴在加入前完全沒有電商經驗，同樣取得了亮眼的成績。',
  },
  {
    q: '大概多久才能開始有收益？',
    a: '一般來說，店鋪開設完成並上架商品後，配合廣告投放，通常在 1-2 個月內就能開始產生訂單。收益金額會隨著店鋪評分提升和廣告優化而逐步增長，多數合作夥伴在 3-6 個月後達到穩定的月收益。',
  },
  {
    q: '庫存由誰管理？如果商品賣不出去怎麼辦？',
    a: '庫存由我們的市場調查團隊統一管理，商品存放於海外合作倉儲。我們在選品時已進行嚴格的市場分析，確保選出的商品具有穩定的市場需求。即便部分商品銷售較慢，我們也會及時調整策略，您無需承擔庫存積壓的風險。',
  },
  {
    q: '收益如何計算？什麼時候可以提款？',
    a: '收益計算方式為：商品售價扣除平台手續費、物流費用及廣告費用後的淨利潤，依照合作協議的比例分配給您。各電商平台的付款週期不同，通常為 7-14 天結算一次，收益會直接匯入您指定的帳戶。',
  },
  {
    q: '如果買家投訴或申請退款怎麼處理？',
    a: '我們有專業的客服團隊負責處理所有買家問題，包括投訴、退款申請及糾紛處理。您無需親自與買家溝通，所有客服事宜由我們的團隊全權處理，確保您的賣家評分不受影響。',
  },
  {
    q: '可以同時在多個平台經營嗎？',
    a: '可以！我們支援同時在美國和瑞士的 16 個主流電商平台上開設店鋪。多平台經營可以分散風險並增加收益來源，我們的 AI 系統可以統一管理多平台訂單，讓您輕鬆掌握所有店鋪的運營狀況。',
  },
  {
    q: '家康是合法公司嗎？如何確認？',
    a: '家康國際貿易有限公司為依法在台灣設立的合法公司，統一編號：96751057，公司地址：高雄市三民區博愛一路287號7樓。您可以至經濟部商業司公司登記查詢系統輸入統一編號進行驗證，確保合作的安全性與合法性。',
  },
];

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" ref={ref} className="py-16 lg:py-24"
      style={{ background: 'linear-gradient(180deg, #FFFBEB 0%, #ffffff 100%)' }}>
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
            <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>常見問題</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            您可能想了解的<span className="text-amber-500">問題</span>
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            整理了最常見的 8 個問題，幫助您快速了解合作詳情
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-amber-100 rounded-xl overflow-hidden px-0"
                style={{ background: 'white' }}
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-amber-600 hover:no-underline hover:bg-amber-50 transition-colors"
                  style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '0.95rem' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5 text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Noto Sans TC, sans-serif', fontSize: '0.9rem' }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center" style={{ transitionDelay: '200ms' }}>
          <p className="text-gray-500 mb-4" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            還有其他問題？歡迎直接聯繫我們的專業顧問
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-amber px-8 py-3.5 rounded-full text-base font-semibold"
          >
            立即諮詢
          </button>
        </div>
      </div>
    </section>
  );
}
