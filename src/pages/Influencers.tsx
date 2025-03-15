import { useState } from 'react';
import { UserPlus, Search, Filter, Copy, ListFilter } from 'lucide-react';
import InfluencerCard from '../components/InfluencerCard';

const Influencers = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const influencers = [
    {
      id: 1,
      name: "Alex Fitness",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      platform: "YouTube",
      followers: "8.2M",
      satireRating: 4,
      featured: true,
      category: "fitness"
    },
    {
      id: 2,
      name: "TechGuru",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      platform: "YouTube",
      followers: "12.4M",
      satireRating: 5,
      featured: false,
      category: "tech"
    },
    {
      id: 3,
      name: "FashionDiva",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      platform: "Instagram",
      followers: "5.8M",
      satireRating: 3,
      featured: true,
      category: "fashion"
    },
    {
      id: 4,
      name: "CryptoKing",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      platform: "Twitter",
      followers: "2.1M",
      satireRating: 5,
      featured: false,
      category: "crypto"
    },
    {
      id: 5,
      name: "FoodieQueen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      platform: "TikTok",
      followers: "6.7M",
      satireRating: 4,
      featured: false,
      category: "food"
    },
    {
      id: 6,
      name: "GamingLegend",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      platform: "Twitch",
      followers: "4.3M",
      satireRating: 3,
      featured: true,
      category: "gaming"
    }
  ];

  const filteredInfluencers = filterCategory === 'all' 
    ? influencers 
    : influencers.filter(inf => inf.category === filterCategory);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Influencer Database</h1>
          <p className="text-gray-400 mt-1">Manage your satire targets</p>
        </div>
        <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
          <UserPlus size={18} className="mr-2" />
          Add Influencer
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search influencers..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex">
          <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg mr-2">
            <Filter size={18} className="mr-2 text-gray-400" />
            <span>Filter</span>
          </button>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2"
          >
            <option value="all">All Categories</option>
            <option value="fitness">Fitness</option>
            <option value="tech">Tech</option>
            <option value="fashion">Fashion</option>
            <option value="crypto">Crypto</option>
            <option value="food">Food</option>
            <option value="gaming">Gaming</option>
          </select>
          <div className="flex bg-gray-800 rounded-lg border border-gray-700">
            <button 
              className={`px-3 py-2 rounded-l-lg ${viewMode === 'grid' ? 'bg-gray-700' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Copy size={18} />
            </button>
            <button 
              className={`px-3 py-2 rounded-r-lg ${viewMode === 'list' ? 'bg-gray-700' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <ListFilter size={18} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInfluencers.map(influencer => (
            <InfluencerCard
              key={influencer.id}
              name={influencer.name}
              avatar={influencer.avatar}
              platform={influencer.platform}
              followers={influencer.followers}
              satireRating={influencer.satireRating}
              featured={influencer.featured}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Platform</th>
                <th className="py-3 px-4 text-left">Followers</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Satire Rating</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInfluencers.map(influencer => (
                <tr key={influencer.id} className="border-t border-gray-700">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img src={influencer.avatar} alt={influencer.name} className="w-8 h-8 rounded-full mr-3" />
                      {influencer.name}
                    </div>
                  </td>
                  <td className="py-3 px-4">{influencer.platform}</td>
                  <td className="py-3 px-4">{influencer.followers}</td>
                  <td className="py-3 px-4 capitalize">{influencer.category}</td>
                  <td className="py-3 px-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-sm ${i < influencer.satireRating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {influencer.featured ? (
                      <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    ) : (
                      <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
                        Regular
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Influencers;
