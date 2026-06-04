/**
 * 共用電商平台資料模組
 * 使用 Simple Icons CDN 提供各平台官方 SVG Logo
 * 部分平台使用上傳的官方 PNG Logo
 */

export type Platform = {
  name: string;
  color: string;
  bg: string;
  iconUrl: string | null;
  /** 圖片型 logo（PNG/JPG），優先於 iconUrl */
  imgUrl?: string;
  letter?: string;
  market: 'us' | 'ch';
};

export const ALL_PLATFORMS: Platform[] = [
  // ── 美國市場 ──────────────────────────────────────────
  {
    name: 'Amazon',
    color: '#FF9900',
    bg: '#FFF8F0',
    iconUrl: 'https://cdn.simpleicons.org/amazon/FF9900',
    market: 'us',
  },
  {
    name: 'eBay',
    color: '#E53238',
    bg: '#FFF0F0',
    iconUrl: 'https://cdn.simpleicons.org/ebay/E53238',
    market: 'us',
  },
  {
    name: 'Walmart',
    color: '#0071CE',
    bg: '#F0F7FF',
    iconUrl: 'https://cdn.simpleicons.org/walmart/0071CE',
    market: 'us',
  },
  {
    name: 'Temu',
    color: '#FF6B35',
    bg: '#FFF4F0',
    iconUrl: 'https://cdn.simpleicons.org/temu/FF6B35',
    market: 'us',
  },
  {
    name: 'Target',
    color: '#CC0000',
    bg: '#FFF0F0',
    iconUrl: 'https://cdn.simpleicons.org/target/CC0000',
    market: 'us',
  },
  {
    name: 'Etsy',
    color: '#F1641E',
    bg: '#FFF5F0',
    iconUrl: 'https://cdn.simpleicons.org/etsy/F1641E',
    market: 'us',
  },
  {
    name: 'Home Depot',
    color: '#F96302',
    bg: '#FFF4F0',
    iconUrl: 'https://cdn.simpleicons.org/homedepot/F96302',
    market: 'us',
  },
  {
    name: 'Best Buy',
    color: '#003087',
    bg: '#F0F3FF',
    iconUrl: 'https://cdn.simpleicons.org/bestbuy/003087',
    market: 'us',
  },
  {
    name: 'Wayfair',
    color: '#7B2D8B',
    bg: '#F8F0FF',
    iconUrl: 'https://cdn.simpleicons.org/wayfair/7B2D8B',
    market: 'us',
  },
  {
    name: "Lowe's",
    color: '#004990',
    bg: '#F0F4FF',
    iconUrl: null,
    imgUrl: '/manus-storage/logo-lowes_7cae2a37.png',
    market: 'us',
  },

  // ── 瑞士市場 ──────────────────────────────────────────
  {
    name: 'Galaxus',
    color: '#333333',
    bg: '#F5F5F5',
    iconUrl: null,
    imgUrl: '/manus-storage/logo-galaxus_f5a22929.png',
    market: 'ch',
  },
  {
    name: 'Zalando',
    color: '#FF6900',
    bg: '#FFF4F0',
    iconUrl: 'https://cdn.simpleicons.org/zalando/FF6900',
    market: 'ch',
  },
  {
    name: 'Ricardo',
    color: '#FF6600',
    bg: '#FFF4F0',
    iconUrl: null,
    imgUrl: '/manus-storage/logo-ricardo_e6fa0c06.png',
    market: 'ch',
  },
  {
    name: 'Microspot',
    color: '#005BAC',
    bg: '#F0F5FF',
    iconUrl: null,
    imgUrl: '/manus-storage/logo-microspot_fff84c33.jpg',
    market: 'ch',
  },
  {
    name: 'Manor',
    color: '#C8102E',
    bg: '#FFF0F0',
    iconUrl: null,
    imgUrl: '/manus-storage/logo-manor_5fd356c2.png',
    market: 'ch',
  },
  {
    name: 'AliExpress',
    color: '#FF4747',
    bg: '#FFF0F0',
    iconUrl: 'https://cdn.simpleicons.org/aliexpress/FF4747',
    market: 'ch',
  },
];

export const US_PLATFORMS = ALL_PLATFORMS.filter((p) => p.market === 'us');
export const CH_PLATFORMS = ALL_PLATFORMS.filter((p) => p.market === 'ch');

/** 依名稱快速查找平台資料 */
export const getPlatform = (name: string) =>
  ALL_PLATFORMS.find((p) => p.name === name);
