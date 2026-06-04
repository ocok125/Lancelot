# 家康國際貿易官方網站 — 設計理念草稿

## 設計方案一：信任陽光商務風（Trustworthy Sunshine Commerce）
<response>
<text>
**Design Movement**: 現代商務陽光主義（Modern Solar Commerce）

**Core Principles**:
1. 明亮誠信 — 以白色與淡金色為基底，傳達透明與可信賴的品牌形象
2. 非對稱動感 — 左右分割佈局搭配對角線切割，避免呆板的置中格局
3. 數據驅動視覺 — 以大數字、圖表、卡片呈現真實成效，增強說服力
4. 層次感深度 — 透過陰影、漸層、玻璃擬態卡片創造視覺立體感

**Color Philosophy**:
- 主色：琥珀金 amber-400/500（#FBBF24/#F59E0B）— 象徵財富、陽光、機遇
- 輔色：靛藍 indigo-600/700（#4F46E5/#4338CA）— 象徵信任、穩重、科技
- 背景：純白 + 淡金色漸層區塊（amber-50/100）
- 深色區塊：gray-900 搭配金色數字，製造戲劇性對比

**Layout Paradigm**:
- Hero：左右 60/40 分割，左側圖像+文字，右側浮動數據卡片
- 非對稱交替佈局：奇數 Section 左圖右文，偶數 Section 右圖左文
- Stats：全寬深色橫幅，4 欄數字成就
- 時間軸：垂直步驟流程，交替左右

**Signature Elements**:
1. 金色圓形 Logo 圖示 + 公司名稱雙語排版
2. 琥珀金漸層按鈕（from-amber-400 to-amber-500）+ 靛藍 hover
3. 玻璃擬態白色卡片（backdrop-blur + 白色半透明背景）

**Interaction Philosophy**:
- 滾動觸發淡入上浮動畫（IntersectionObserver）
- 數字計數動畫（Stats 區塊）
- Marquee 無縫滾動（平台 Logo）
- Hover 放大 + 金色邊框（服務卡片、見證卡片）

**Animation**:
- 頁面載入 Splash：Logo + 跳動點，1.6 秒後淡出
- Section Reveal：translateY(30px) → 0，opacity 0 → 1，300ms ease-out
- 計數動畫：0 → 目標值，2 秒 easeOut
- Marquee：CSS @keyframes，35 秒一圈
- Hover：scale(1.03-1.04) + 金色 border，200ms ease-out

**Typography System**:
- 標題：Noto Serif TC（serif，權威感）— h1 3.5rem bold, h2 2.5rem semibold
- 內文：Noto Sans TC（sans-serif，易讀性）— body 1rem, 行高 1.7
- 數字強調：tabular-nums，amber-400 色
</text>
<probability>0.09</probability>
</response>

## 設計方案二：極簡金融科技風（Fintech Minimal）
<response>
<text>
**Design Movement**: 極簡金融科技（Minimal Fintech）

**Core Principles**:
1. 留白即設計 — 大量空白製造高端感
2. 線條精準 — 細線分隔、精確網格
3. 單色調節制 — 以黑白為主，金色作為唯一強調
4. 數據第一 — 圖表與數字主導視覺

**Color Philosophy**:
- 主色：純黑 + 純白
- 強調：金色線條與數字
- 背景：米白色（#FAFAF8）

**Layout Paradigm**:
- 全寬橫幅式佈局
- 嚴格網格系統
- 大標題佔滿螢幕

**Signature Elements**:
1. 細金線分隔
2. 大號數字排版
3. 極簡圖標系統

**Interaction Philosophy**:
- 精確的 100ms 微互動
- 無裝飾性動畫
- 純功能性過渡

**Animation**:
- 最小化動畫
- 只有必要的狀態過渡

**Typography System**:
- 標題：Noto Serif TC
- 內文：Noto Sans TC
</text>
<probability>0.05</probability>
</response>

## 設計方案三：活力電商節慶風（Vibrant E-commerce Festival）
<response>
<text>
**Design Movement**: 活力電商節慶（Vibrant Commerce）

**Core Principles**:
1. 視覺衝擊 — 大膽色彩對比
2. 節慶感 — 彩帶、星星裝飾元素
3. 親民活潑 — 圓角、柔和陰影
4. 行動導向 — 大型 CTA 按鈕

**Color Philosophy**:
- 主色：橘紅漸層
- 輔色：亮黃、翠綠
- 背景：淺色系

**Layout Paradigm**:
- 卡片堆疊式佈局
- 全寬橫幅
- 瀑布流展示

**Signature Elements**:
1. 彩色漸層按鈕
2. 圓形頭像卡片
3. 星評系統

**Interaction Philosophy**:
- 彈跳動畫
- 彩色 hover 效果

**Animation**:
- 彈跳進場
- 彩色粒子效果

**Typography System**:
- 標題：Noto Serif TC
- 內文：Noto Sans TC
</text>
<probability>0.06</probability>
</response>

---

## 選定方案：方案一 — 信任陽光商務風

選定理由：最符合品牌定位（誠信、財富感、跨境電商專業），且與簡報要求的琥珀金×靛藍配色完全吻合。非對稱佈局與玻璃擬態卡片能有效展示數據，增強說服力。
