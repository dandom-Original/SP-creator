import React from 'react';

interface DataPoint {
  date: string;
  revenue: number;
}

interface MonetizationChartProps {
  data: DataPoint[];
  title: string;
}

const MonetizationChart: React.FC<MonetizationChartProps> = ({ data, title }) => {
  // Find the maximum value to scale the chart
  const maxValue = Math.max(...data.map(item => item.revenue));
  
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end">
          {data.map((item, index) => {
            const height = (item.revenue / maxValue) * 100;
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col items-center justify-end px-1"
              >
                <div 
                  className="w-full bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs mt-2 text-gray-400">{item.date}</span>
              </div>
            );
          })}
        </div>
        
        {/* Y-axis lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div key={i} className="border-t border-gray-700 w-full h-0"></div>
          ))}
        </div>
        
        {/* Y-axis labels */}
        <div className="absolute inset-y-0 left-0 flex flex-col justify-between items-start pointer-events-none">
          {[0, 1, 2, 3, 4].map((_, i) => {
            const value = Math.round((maxValue / 4) * (4 - i));
            return (
              <div key={i} className="text-xs text-gray-500 pr-2">
                ${value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonetizationChart;
