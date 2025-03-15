import { useState } from 'react';
import { PlusCircle, Filter, Search } from 'lucide-react';
import ContentCard from '../components/ContentCard';

const Content = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const getFilteredContent = () => {
    // Example content data
    const allContent = [
      {
        id: 1,
        title: "Fitness Influencer Showdown",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        views: "124K",
        likes: "8.2K",
        date: "2 days ago",
        status: "published" as const
      },
      {
        id: 2,
        title: "Tech Bro Meltdown",
        thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        views: "98K",
        likes: "6.5K",
        date: "1 week ago",
        status: "published" as const
      },
      {
        id: 3,
        title: "Lifestyle Guru Special",
        thumbnail: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        views: "-",
        likes: "-",
        date: "Scheduled for tomorrow",
        status: "scheduled" as const
      },
      {
        id: 4,
        title: "Fashion Week Satire",
        thumbnail: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        views: "-",
        likes: "-",
        date: "In progress",
        status: "draft" as const
      },
      {
        id: 5,
        title: "Gaming Streamer Drama",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        views: "142K",
        likes: "11.3K",
        date: "2 weeks ago",
        status: "published" as const
      },
      {
        id: 6,
        title: "Food Vlogger Cook-Off",
        thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        views: "-",
        likes: "-",
        date: "Script ready",
        status: "draft" as const
      }
    ];

    if (filterStatus === 'all') {
      return allContent;
    } else {
      return allContent.filter(item => item.status === filterStatus);
    }
  };

  const filteredContent = getFilteredContent();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Content Library</h1>
          <p className="text-gray-400 mt-1">Manage your satire episodes</p>
        </div>
        <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
          <PlusCircle size={18} className="mr-2" />
          New Episode
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search content..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex">
          <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg mr-2">
            <Filter size={18} className="mr-2 text-gray-400" />
            <span>Filter</span>
          </button>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">All Content</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
            <option value="draft">Drafts</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(content => (
          <ContentCard
            key={content.id}
            title={content.title}
            thumbnail={content.thumbnail}
            views={content.views}
            likes={content.likes}
            date={content.date}
            status={content.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
