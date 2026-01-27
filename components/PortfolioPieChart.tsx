'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface PortfolioPieChartProps {
  allocation: {
    stocks: number;
    bonds: number;
    alternatives: number;
  };
}

const COLORS = {
  stocks: '#3B82F6',      // Blue
  bonds: '#10B981',       // Green
  alternatives: '#F59E0B' // Amber
};

export default function PortfolioPieChart({ allocation }: PortfolioPieChartProps) {
  const data = [
    { name: 'Stocks', value: allocation.stocks },
    { name: 'Bonds', value: allocation.bonds },
    { name: 'Alternatives', value: allocation.alternatives },
  ];

  return (
    <div className="w-full h-64 my-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[entry.name.toLowerCase() as keyof typeof COLORS]} 
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
