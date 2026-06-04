/**
 * BrandBanner — 即時動態訂單通知（每 3 秒切換）
 * 模擬即時顯示各夥伴在不同平台的收益通知，製造真實感與社會認同
 */
import { useEffect, useState } from 'react';

const notifications = [
  { name: '陳先生', location: '台北', platform: 'Amazon',     amount: '$3,840', time: '剛剛' },
  { name: '林小姐', location: '台中', platform: 'eBay',       amount: '$1,260', time: '1 分鐘前' },
  { name: '王先生', location: '高雄', platform: 'Walmart',    amount: '$2,580', time: '2 分鐘前' },
  { name: '張小姐', location: '新竹', platform: 'Etsy',       amount: '$980',   time: '3 分鐘前' },
  { name: '李先生', location: '台南', platform: 'Amazon',     amount: '$5,200', time: '4 分鐘前' },
  { name: '黃小姐', location: '桃園', platform: 'Target',     amount: '$1,740', time: '5 分鐘前' },
  { name: '吳先生', location: '新北', platform: 'Zalando',    amount: '$3,120', time: '6 分鐘前' },
  { name: '劉小姐', location: '基隆', platform: 'Galaxus',    amount: '$2,060', time: '7 分鐘前' },
  { name: '蔡先生', location: '嘉義', platform: 'Best Buy',   amount: '$4,380', time: '8 分鐘前' },
  { name: '鄭小姐', location: '彰化', platform: 'Wayfair',    amount: '$1,890', time: '9 分鐘前' },
  { name: '許先生', location: '苗栗', platform: 'Home Depot', amount: '$3,650', time: '10 分鐘前' },
  { name: '謝小姐', location: '宜蘭', platform: 'Amazon',     amount: '$6,720', time: '11 分鐘前' },
  { name: '周先生', location: '花蓮', platform: 'eBay',       amount: '$2,340', time: '12 分鐘前' },
  { name: '楊小姐', location: '台東', platform: 'Ricardo',    amount: '$1,580', time: '13 分鐘前' },
  { name: '洪先生', location: '屏東', platform: 'Temu',       amount: '$890',   time: '14 分鐘前' },
  { name: '邱小姐', location: '雲林', platform: 'Manor',      amount: '$2,780', time: '15 分鐘前' },
  { name: '曾先生', location: '南投', platform: 'Amazon',     amount: '$4,950', time: '16 分鐘前' },
  { name: '廖小姐', location: '澎湖', platform: 'Walmart',    amount: '$1,420', time: '17 分鐘前' },
  { name: '賴先生', location: '金門', platform: 'Etsy',       amount: '$3,200', time: '18 分鐘前' },
  { name: '徐小姐', location: '台北', platform: 'Microspot',  amount: '$2,100', time: '19 分鐘前' },
  { name: '江先生', location: '台中', platform: 'Amazon',     amount: '$7,800', time: '20 分鐘前' },
  { name: '何小姐', location: '高雄', platform: "Lowe's",     amount: '$1,660', time: '21 分鐘前' },
  { name: '馬先生', location: '新竹', platform: 'Zalando',    amount: '$3,480', time: '22 分鐘前' },
  { name: '朱小姐', location: '桃園', platform: 'eBay',       amount: '$2,920', time: '23 分鐘前' },
];

const platformColors: Record<string, string> = {
  Amazon: '#FF9900',
  eBay: '#E53238',
  Walmart: '#0071CE',
  Etsy: '#F16521',
  Target: '#CC0000',
  Zalando: '#FF6900',
  Galaxus: '#888888',
  'Best Buy': '#0046BE',
  Wayfair: '#7B2D8B',
  'Home Depot': '#F96302',
  Ricardo: '#FF6600',
  Temu: '#FF4747',
  Manor: '#C41E3A',
  Microspot: '#005BAC',
  "Lowe's": '#004990',
};

export default function BrandBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const n = notifications[index];
  const color = platformColors[n.platform] || '#F59E0B';

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #0f0a00 0%, #1e1b4b 100%)',
        borderTop: '1px solid rgba(245,158,11,0.25)',
        borderBottom: '1px solid rgba(79,70,229,0.25)',
      }}
    >
      <div className="container py-4">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Live label */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span
              className="text-xs font-semibold text-white/50 tracking-widest uppercase whitespace-nowrap"
              style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
            >
              夥伴即時收益
            </span>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-white/10 hidden sm:block flex-shrink-0" />

          {/* Notification card */}
          <div
            className="flex items-center gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 350ms cubic-bezier(0.23,1,0.32,1), transform 350ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{
                background: `${color}25`,
                border: `1.5px solid ${color}50`,
                color,
                fontFamily: 'Noto Serif TC, serif',
              }}
            >
              {n.name[0]}
            </div>

            {/* Text */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className="text-sm font-semibold text-white/90"
                style={{ fontFamily: 'Noto Sans TC, sans-serif' }}
              >
                {n.location} {n.name}
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>在</span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md"
                style={{
                  background: `${color}22`,
                  border: `1px solid ${color}40`,
                  color,
                  fontFamily: 'Noto Sans TC, sans-serif',
                }}
              >
                {n.platform}
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>獲得</span>
              <span
                className="text-base font-black"
                style={{ color: '#4ADE80', fontFamily: 'Noto Serif TC, serif' }}
              >
                {n.amount}
              </span>
              <span className="text-xs text-white/30 ml-1" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
                {n.time}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-white/10 hidden sm:block flex-shrink-0" />

          {/* Dot indicators */}
          <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
            {notifications.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '16px' : '4px',
                  height: '4px',
                  background: i === index ? '#F59E0B' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
