import { useState } from 'react';

type Props = {
  name: string;
  color: string;
  iconUrl: string | null;
  imgUrl?: string;
  letter?: string;
  size?: number; // px, default 24
  className?: string;
};

/**
 * 通用平台 Logo 元件
 * 優先順序：imgUrl（PNG/JPG）→ iconUrl（Simple Icons SVG）→ 首字母 fallback
 */
export default function PlatformLogo({
  name,
  color,
  iconUrl,
  imgUrl,
  letter,
  size = 24,
  className = '',
}: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const [iconFailed, setIconFailed] = useState(false);
  const fallbackChar = letter || name.charAt(0);

  // 1. 優先：PNG/JPG 圖片 Logo
  if (imgUrl && !imgFailed) {
    return (
      <img
        src={imgUrl}
        alt={name}
        width={size * 2}
        height={size}
        className={`object-contain flex-shrink-0 ${className}`}
        style={{ width: 'auto', height: size, maxWidth: size * 2.5 }}
        onError={() => setImgFailed(true)}
      />
    );
  }

  // 2. 次選：Simple Icons SVG
  if (iconUrl && !iconFailed) {
    return (
      <img
        src={iconUrl}
        alt={name}
        width={size}
        height={size}
        className={`object-contain flex-shrink-0 ${className}`}
        style={{ width: size, height: size }}
        onError={() => setIconFailed(true)}
      />
    );
  }

  // 3. Fallback：首字母
  return (
    <span
      className={`font-bold flex-shrink-0 ${className}`}
      style={{ color, fontSize: size * 0.7, fontFamily: 'Noto Serif TC, serif', lineHeight: 1 }}
    >
      {fallbackChar}
    </span>
  );
}
