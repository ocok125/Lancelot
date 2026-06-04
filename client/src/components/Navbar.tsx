import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center group"
        >
          <img
            src={LOGO_URL}
            alt="家康國際貿易有限公司"
            className="h-10 lg:h-12 w-auto object-contain"
            style={{
              maxWidth: '180px',
              transition: 'filter 0.3s',
            }}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:text-amber-500 ${
                scrolled ? 'text-gray-700 hover:bg-amber-50' : 'text-white/90 hover:bg-white/10'
              }`}
              style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="ml-3 px-5 py-2 rounded-full text-sm font-semibold btn-amber"
          >
            立即合作
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-gray-700 hover:bg-amber-50' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="開啟選單"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white/98 backdrop-blur-md border-t border-amber-100 overflow-y-auto transition-all duration-300 ${
          menuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
              style={{
                fontFamily: 'Noto Sans TC, sans-serif',
                animationDelay: `${i * 40}ms`,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `transform 300ms ${i * 40}ms, opacity 300ms ${i * 40}ms, background 200ms`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 mx-4 py-3 rounded-full text-sm font-semibold btn-amber text-center"
          >
            立即合作
          </button>
        </div>
      </div>
    </nav>
  );
}
