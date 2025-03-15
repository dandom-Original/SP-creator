import { CreditCard, Gift, DollarSign, ArrowRight } from 'lucide-react';
import MonetizationChart from '../components/MonetizationChart';

const Monetization = () => {
  const monthlyRevenueData = [
    { date: 'Jan', revenue: 1200 },
    { date: 'Feb', revenue: 1800 },
    { date: 'Mar', revenue: 2400 },
    { date: 'Apr', revenue: 2100 },
    { date: 'May', revenue: 2800 },
    { date: 'Jun', revenue: 3500 },
    { date: 'Jul', revenue: 4200 },
  ];

  const revenueSourcesData = [
    { date: 'Ads', revenue: 2200 },
    { date: 'Memberships', revenue: 1300 },
    { date: 'Merch', revenue: 800 },
    { date: 'Sponsorships', revenue: 1900 },
    { date: 'Donations', revenue: 500 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Monetization</h1>
          <p className="text-gray-400 mt-1">Manage your revenue streams</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-medium mb-4">Total Revenue</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">$42,582</span>
            <span className="ml-2 text-green-400 text-sm">+18% YTD</span>
          </div>
          <div className="mt-4">
            <button className="text-yellow-400 text-sm hover:underline flex items-center">
              View revenue details <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-medium mb-4">Next Payout</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">$5,847</span>
            <span className="ml-2 text-gray-400 text-sm">in 8 days</span>
          </div>
          <div className="mt-4">
            <button className="text-yellow-400 text-sm hover:underline flex items-center">
              Manage payment method <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-medium mb-4">Top Revenue Source</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">Memberships</span>
            <span className="ml-2 text-green-400 text-sm">+24%</span>
          </div>
          <div className="mt-4">
            <button className="text-yellow-400 text-sm hover:underline flex items-center">
              Optimize revenue sources <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <MonetizationChart data={monthlyRevenueData} title="Monthly Revenue" />
        </div>
        <div>
          <MonetizationChart data={revenueSourcesData} title="Revenue Sources" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Revenue Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Ad Revenue</h3>
                <p className="text-gray-400 text-sm mt-1">From platform monetization</p>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/20">
                <DollarSign size={20} className="text-blue-400" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">$2,245</p>
              <p className="text-sm text-green-400 mt-1">+12% from last month</p>
            </div>
            <button className="w-full mt-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
              Optimize Ad Strategy
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Memberships</h3>
                <p className="text-gray-400 text-sm mt-1">Recurring subscriber revenue</p>
              </div>
              <div className="p-2 rounded-lg bg-purple-500/20">
                <CreditCard size={20} className="text-purple-400" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">$1,875</p>
              <p className="text-sm text-green-400 mt-1">+24% from last month</p>
            </div>
            <button className="w-full mt-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
              Manage Membership Tiers
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Merchandise</h3>
                <p className="text-gray-400 text-sm mt-1">Physical products</p>
              </div>
              <div className="p-2 rounded-lg bg-yellow-500/20">
                <Gift size={20} className="text-yellow-400" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">$945</p>
              <p className="text-sm text-green-400 mt-1">+8% from last month</p>
            </div>
            <button className="w-full mt-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
              Add New Products
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Monetization Strategy</h2>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">AI-Driven Recommendations</h3>
            <p className="text-gray-400">Based on your content performance and audience demographics:</p>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-yellow-400">Create Premium Membership Tier</h4>
              <p className="text-sm text-gray-300 mt-1">Your engagement metrics indicate potential for a higher-priced membership tier with exclusive content. Estimated revenue increase: 18-22%</p>
              <button className="mt-3 px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-600">
                Implement
              </button>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-yellow-400">Optimize Ad Placement</h4>
              <p className="text-sm text-gray-300 mt-1">Current ad placement could be optimized for 15% higher revenue without affecting viewer retention. Recommended changes included.</p>
              <button className="mt-3 px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-600">
                Review & Apply
              </button>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-yellow-400">Expand Merchandise Line</h4>
              <p className="text-sm text-gray-300 mt-1">Adding character-based merchandise could increase merch revenue by 30%. AI can generate design concepts based on your most popular episodes.</p>
              <button className="mt-3 px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-600">
                Generate Designs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
