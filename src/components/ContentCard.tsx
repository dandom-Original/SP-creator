import { useState } from 'react';
import { MoreVertical, Heart, MessageSquare, Share2, Edit, Trash2 } from 'lucide-react';

interface ContentCardProps {
  title: string;
  thumbnail: string;
  views: string;
  likes: string;
  date: string;
  status: 'published' | 'draft' | 'scheduled';
}

const ContentCard = ({ title, thumbnail, views, likes, date, status }: ContentCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'published':
        return 'bg-green-500';
      case 'draft':
        return 'bg-yellow-500';
      case 'scheduled':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-36 object-cover" />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs ${getStatusColor()}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-white">{title}</h3>
          <div className="relative">
            <button 
              className="p-1 rounded-full hover:bg-gray-700"
              onClick={() => setShowMenu(!showMenu)}
            >
              <MoreVertical size={16} />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-1 w-40 bg-gray-700 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-600">
                    <Edit size={14} className="mr-2" />
                    Edit
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-600">
                    <Trash2 size={14} className="mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex mt-3 text-sm text-gray-400">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{views} views</span>
        </div>
        <div className="flex mt-4 pt-3 border-t border-gray-700">
          <button className="flex items-center mr-4 text-gray-400 hover:text-white">
            <Heart size={16} className="mr-1" />
            {likes}
          </button>
          <button className="flex items-center mr-4 text-gray-400 hover:text-white">
            <MessageSquare size={16} className="mr-1" />
            Comments
          </button>
          <button className="flex items-center text-gray-400 hover:text-white ml-auto">
            <Share2 size={16} className="mr-1" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
