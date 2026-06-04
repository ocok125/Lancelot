/**
 * 模擬電商後台收益截圖元件
 * 顯示真實感的 Amazon Seller Central 風格數據截圖
 * 貨幣：USD 美金 | 日期範圍：2026/4月～6月
 */

const orders = [
  { id: '#AMZ-5291', product: 'Wireless Earbuds Pro',       amount: '$102.50', status: '已完成', date: '2026/06/02' },
  { id: '#AMZ-5290', product: 'LED Desk Lamp',              amount: '$57.80',  status: '已完成', date: '2026/06/01' },
  { id: '#AMZ-5289', product: 'Portable Charger 20000mAh',  amount: '$65.90',  status: '出貨中', date: '2026/05/30' },
  { id: '#AMZ-5288', product: 'Smart Watch Band',           amount: '$30.60',  status: '已完成', date: '2026/05/28' },
  { id: '#AMZ-5287', product: 'USB-C Hub 7-in-1',           amount: '$76.40',  status: '已完成', date: '2026/05/25' },
];

export default function EarningsScreenshot() {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
      style={{ fontFamily: 'Noto Sans TC, sans-serif', fontSize: '0.8rem' }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3"
        style={{ background: '#232F3E' }}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-white/60 text-xs">Amazon Seller Central</div>
        <div className="text-white/40 text-xs">seller.amazon.com</div>
      </div>

      {/* Date range badge */}
      <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-100"
        style={{ background: '#F0F4FF' }}>
        <span className="text-indigo-500 text-xs font-semibold">📅 統計區間：</span>
        <span className="text-indigo-700 text-xs font-bold">2026/04/01 ～ 2026/06/02</span>
        <span className="ml-auto text-gray-400 text-xs">幣別：USD $</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-0 border-b border-gray-100"
        style={{ background: '#F8F9FA' }}>
        {[
          { label: '本月銷售額', value: '$1,638', change: '+18.4%', color: '#16a34a' },
          { label: '本月訂單數', value: '247',    change: '+12.4%', color: '#16a34a' },
          { label: '平均客單價', value: '$66.30', change: '+5.2%',  color: '#16a34a' },
        ].map((s) => (
          <div key={s.label} className="p-3 border-r border-gray-100 last:border-r-0">
            <div className="text-gray-500 text-xs mb-1">{s.label}</div>
            <div className="text-gray-800 font-bold text-sm">{s.value}</div>
            <div className="text-xs font-medium" style={{ color: s.color }}>{s.change}</div>
          </div>
        ))}
      </div>

      {/* Orders table */}
      <div style={{ background: 'white' }} className="overflow-x-auto">
        <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
          <span className="text-gray-700 font-semibold text-xs">最近訂單</span>
          <span className="text-blue-500 text-xs cursor-pointer">查看全部</span>
        </div>
        <table className="w-full min-w-[400px]">
          <thead>
            <tr style={{ background: '#F8F9FA' }}>
              {['訂單編號', '商品', '金額 (USD)', '狀態', '日期'].map((h) => (
                <th key={h} className="px-3 py-2 text-left text-gray-500 font-medium text-xs">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={o.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-3 py-2 text-blue-500 font-medium">{o.id}</td>
                <td className="px-3 py-2 text-gray-700 max-w-[120px] truncate">{o.product}</td>
                <td className="px-3 py-2 text-gray-800 font-semibold">{o.amount}</td>
                <td className="px-3 py-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      background: o.status === '已完成' ? '#dcfce7' : '#fef9c3',
                      color: o.status === '已完成' ? '#16a34a' : '#ca8a04',
                    }}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-gray-500">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between"
          style={{ background: '#F8F9FA' }}>
          <span className="text-gray-500 text-xs">顯示 5 / 247 筆訂單</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-600 text-xs font-medium">帳戶運作正常</span>
          </div>
        </div>
      </div>
    </div>
  );
}
