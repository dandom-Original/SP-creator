import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: ReactNode;
}

const StatsCard = ({ title, value, change, isPositive, icon }: StatsCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-gray-700">{icon}</div>
      </div>
      <div className={`mt-4 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? '↑' : '↓'} {change} since last week
      </div>
    </div>
  );
};

export default StatsCard;
