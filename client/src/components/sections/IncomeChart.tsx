import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const monthlyData = [
  { month: '1月', income: 8000 },
  { month: '2月', income: 11000 },
  { month: '3月', income: 14500 },
  { month: '4月', income: 18000 },
  { month: '5月', income: 22000 },
  { month: '6月', income: 26500 },
  { month: '7月', income: 30000 },
  { month: '8月', income: 35000 },
  { month: '9月', income: 39000 },
  { month: '10月', income: 43000 },
  { month: '11月', income: 48000 },
  { month: '12月', income: 52000 },
];

const platformData = [
  { platform: 'Amazon', income: 52000, color: '#FF9900' },
  { platform: 'eBay', income: 38000, color: '#E53238' },
  { platform: 'Walmart', income: 31000, color: '#0071CE' },
  { platform: 'Zalando', income: 28000, color: '#FF6900' },
  { platform: 'Galaxus', income: 24000, color: '#FF6600' },
  { platform: 'Temu', income: 21000, color: '#FF6B35' },
];

const formatNTD = (value: number) => `NT$${(value / 1000).toFixed(0)}k`;

export default function IncomeChart() {
  const ref = useScrollReveal();

  return (
    <section id="income" ref={ref} className="py-16 lg:py-24"
      style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', border: '1px solid #F59E0B' }}>
            <span className="text-amber-700 text-sm font-semibold" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>收益成效</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Noto Serif TC, serif' }}>
            真實收益<span className="text-amber-500">成長數據</span>
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
            合作夥伴平均月收益從 NT$8,000 成長至 NT$52,000
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Area chart — monthly growth */}
          <div className="reveal-left glass-card rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Noto Serif TC, serif' }}>
              月收益成長曲線
            </h3>
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              合作夥伴 12 個月平均月收益走勢
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: 'Noto Sans TC, sans-serif', fill: '#6b7280' }} />
                <YAxis tickFormatter={formatNTD} tick={{ fontSize: 11, fontFamily: 'Noto Sans TC, sans-serif', fill: '#6b7280' }} />
                <Tooltip
                  formatter={(value: number) => [`NT$${value.toLocaleString()}`, '月收益']}
                  contentStyle={{ fontFamily: 'Noto Sans TC, sans-serif', borderRadius: '8px', border: '1px solid #F59E0B' }}
                />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  fill="url(#incomeGradient)"
                  dot={{ fill: '#F59E0B', r: 4 }}
                  activeDot={{ r: 6, fill: '#F59E0B' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Bar chart — platform comparison */}
          <div className="reveal-right glass-card rounded-2xl p-6" style={{ transitionDelay: '150ms' }}>
            <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Noto Serif TC, serif' }}>
              各平台平均月收益比較
            </h3>
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>
              主要合作平台月收益數據（成熟期）
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={platformData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="platform" tick={{ fontSize: 12, fontFamily: 'Noto Sans TC, sans-serif', fill: '#6b7280' }} />
                <YAxis tickFormatter={formatNTD} tick={{ fontSize: 11, fontFamily: 'Noto Sans TC, sans-serif', fill: '#6b7280' }} />
                <Tooltip
                  formatter={(value: number) => [`NT$${value.toLocaleString()}`, '平均月收益']}
                  contentStyle={{ fontFamily: 'Noto Sans TC, sans-serif', borderRadius: '8px', border: '1px solid #F59E0B' }}
                />
                <Bar dataKey="income" radius={[6, 6, 0, 0]}>
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            {/* Custom legend */}
            <div className="flex flex-wrap gap-2 mt-4">
              {platformData.map((p) => (
                <div key={p.platform} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ background: p.color }} />
                  <span className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{p.platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary stats */}
        <div className="reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ transitionDelay: '200ms' }}>
          {[
            { label: '最高月收益', value: 'NT$52,000', sub: 'Amazon 平台' },
            { label: '平均起步收益', value: 'NT$8,000', sub: '第 1 個月' },
            { label: '成長倍數', value: '6.5x', sub: '12 個月成長' },
            { label: '平均月收益', value: 'NT$45,000', sub: '成熟期數據' },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <div className="text-xl font-bold amber-number mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-0.5" style={{ fontFamily: 'Noto Serif TC, serif' }}>{s.label}</div>
              <div className="text-xs text-gray-400" style={{ fontFamily: 'Noto Sans TC, sans-serif' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
