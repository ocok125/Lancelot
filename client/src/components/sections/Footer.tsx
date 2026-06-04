const LOGO_URL = '/manus-storage/jiaakon-logo-transparent_777796f9.png';

const navLinks = [
  { label: '首頁', href: '#hero' },
  { label: '關於我們', href: '#about' },
  { label: '服務優勢', href: '#services' },
  { label: '合作流程', href: '#process' },
  { label: '合作平台', href: '#platforms' },
  { label: '客戶見證', href: '#testimonials' },
  { label: '收益成效', href: '#income' },
  { label: '常見問題', href: '#faq' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)' }}>
      <div className="container py-10 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src={LOGO_URL}
                alt="家康國際貿易有限公司"
                className="h-14 w-auto object-contain"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              專業跨境電商代運營服務，協助您進駐全球 16 個主流電商平台，開啟穩定的被動收入之路。
            </p>
            <div className="text-gray-500 text-xs space-y-1" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              <div>統一編號：96751057</div>
              <div>高雄市三民區博愛一路287號7樓</div>
              <div>週一至週五 09:00–18:00</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontFamily: 'Noto Serif TC, serif' }}>快速導覽</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-gray-400 text-sm hover:text-amber-400 transition-colors py-1"
                  style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-5" style={{ fontFamily: 'Noto Serif TC, serif' }}>立即開始</h4>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              免費諮詢，了解如何透過跨境電商開啟您的副業生活
            </p>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-amber px-6 py-3 rounded-full text-sm font-semibold"
            >
              免費諮詢合作
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            © {new Date().getFullYear()} 家康國際貿易有限公司 JIAAKON TRADING CO., LTD. All rights reserved.
          </div>
          <div className="text-gray-600 text-xs" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            統一編號：96751057 | 合法立案公司
          </div>
        </div>
      </div>
    </footer>
  );
}
