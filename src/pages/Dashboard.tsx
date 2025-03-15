import { PlayCircle, TrendingUp, DollarSign, Users } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import ContentCard from '../components/ContentCard';
import MonetizationChart from '../components/MonetizationChart';

const Dashboard = () => {
  const revenueData = [
    { date: 'Jan', revenue: 1200 },
    { date: 'Feb', revenue: 1800 },
    { date: 'Mar', revenue: 2400 },
    { date: 'Apr', revenue: 2100 },
    { date: 'May', revenue: 2800 },
    { date: 'Jun', revenue: 3500 },
    { date: 'Jul', revenue: 4200 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">Overview of your satire content performance</p>
        </div>
        <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
          <PlayCircle size={18} className="mr-2" />
          Create New Episode
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Views" 
          value="1.2M" 
          change="12%" 
          isPositive={true}
          icon={<TrendingUp size={20} className="text-green-400" />} 
        />
        <StatsCard 
          title="Subscribers" 
          value="94.2K" 
          change="8%" 
          isPositive={true}
          icon={<Users size={20} className="text-blue-400" />} 
        />
        <StatsCard 
          title="Revenue" 
          value="$42,582" 
          change="5%" 
          isPositive={true}
          icon={<DollarSign size={20} className="text-yellow-400" />} 
        />
        <StatsCard 
          title="Engagement Rate" 
          value="18.6%" 
          change="2%" 
          isPositive={false}
          icon={<PlayCircle size={20} className="text-purple-400" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <MonetizationChart data={revenueData} title="Revenue Growth" />
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-medium mb-4">Top Performing Satire</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded bg-gray-700 flex items-center justify-center mr-3">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium">Influencer Island: Episode 3</h4>
                <p className="text-sm text-gray-400">250K views</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded bg-gray-700 flex items-center justify-center mr-3">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium">Crypto Bros Meltdown</h4>
                <p className="text-sm text-gray-400">185K views</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded bg-gray-700 flex items-center justify-center mr-3">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium">The Beauty Guru Wars</h4>
                <p className="text-sm text-gray-400">162K views</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Content</h2>
          <button className="text-yellow-400 hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard 
            title="Fitness Influencer Showdown" 
            thumbnail="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            views="124K"
            likes="8.2K"
            date="2 days ago"
            status="published"
          />
          <ContentCard 
            title="Tech Bro Meltdown" 
            thumbnail="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            views="98K"
            likes="6.5K"
            date="1 week ago"
            status="published"
          />
          <ContentCard 
            title="Lifestyle Guru Special" 
            thumbnail="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            views="-"
            likes="-"
            date="Scheduled for tomorrow"
            status="scheduled"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
