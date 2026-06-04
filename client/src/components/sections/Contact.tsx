import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { MapPin, Clock, Mail, CheckCircle } from 'lucide-react';

const CONTACT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/9zNYWg6MmTygZM5G7rKZrc/contact-consultant-kQFkeSXiNgbP9PrcHjWrB3.webp';

const trustPoints = [
  '合法立案公司，統編可查驗',
  '全程免費諮詢，無任何隱藏費用',
  '專業顧問一對一服務',
  '零囤貨、零庫存風險',
  '500+ 合作夥伴真實見證',
  '16 個主流電商平台覆蓋',
];

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
            <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>聯絡我們</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            開始您的<span className="text-amber-500">電商之旅</span>
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            填寫諮詢表單，專業顧問將在一個工作日內與您聯繫
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left — form */}
          <div className="reveal">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Noto Serif TC, serif' }}>
                  諮詢表單已送出！
                </h3>
                <p className="text-gray-500" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  感謝您的詢問，我們的專業顧問將在一個工作日內與您聯繫。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="請輸入您的姓名"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-gray-800"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif', fontSize: '0.95rem' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                    聯絡電話 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="請輸入您的聯絡電話"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-gray-800"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif', fontSize: '0.95rem' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="請輸入您的 Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-gray-800"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif', fontSize: '0.95rem' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                    想了解的內容
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="請描述您想了解的合作細節或問題..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-gray-800 resize-none"
                    style={{ fontFamily: 'Noto Sans TC, sans-serif', fontSize: '0.95rem' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-amber py-4 rounded-xl text-base font-semibold"
                >
                  送出諮詢表單
                </button>
                <p className="text-xs text-gray-400 text-center" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  提交即代表您同意我們聯繫您進行合作諮詢
                </p>
              </form>
            )}
          </div>

          {/* Right — image + info */}
          <div className="reveal space-y-4 sm:space-y-6" style={{ transitionDelay: '150ms' }}>
            {/* Consultant image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ maxHeight: '260px' }}>
              <img src={CONTACT_IMG} alt="家康顧問" className="w-full h-full object-cover object-top" style={{ maxHeight: '260px' }} />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)'
              }} />
              {/* Quote card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3">
                <p className="text-gray-700 text-sm italic" style={{ fontFamily: 'Noto Serif TC, serif' }}>
                  「讓我們成為您跨境電商路上最可靠的夥伴」
                </p>
                <p className="text-amber-600 text-xs mt-1 font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                  — 家康國際貿易顧問團隊
                </p>
              </div>
            </div>

            {/* Company info */}
            <div className="glass-card rounded-2xl p-5 space-y-3">
              <h4 className="font-bold text-gray-800 mb-3" style={{ fontFamily: 'Noto Serif TC, serif' }}>公司資訊</h4>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>高雄市三民區博愛一路287號7樓</div>
                  <div className="text-xs text-gray-400" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>統一編號：96751057</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-amber-500 flex-shrink-0" />
                <div className="text-sm text-gray-700" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>週一至週五 09:00–18:00</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500 flex-shrink-0" />
                <div className="text-sm text-gray-700" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>service@jiaakon-trade.com</div>
              </div>
            </div>

            {/* Why choose us */}
            <div className="rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', border: '1px solid #F59E0B' }}>
              <h4 className="font-bold text-amber-800 mb-3" style={{ fontFamily: 'Noto Serif TC, serif' }}>為什麼選擇家康？</h4>
              <div className="space-y-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: '#F59E0B' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-amber-800" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="reveal mt-8 lg:mt-12" style={{ transitionDelay: '300ms' }}>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '240px' }}>
            <iframe
              src="https://maps.google.com/maps?q=高雄市三民區博愛一路287號7樓&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="家康國際貿易有限公司地圖"
            />
          </div>
          <div className="text-center mt-3">
            <a
              href="https://maps.google.com/maps?q=高雄市三民區博愛一路287號7樓"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
              style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
            >
              <MapPin size={14} />
              在 Google Maps 開啟
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
