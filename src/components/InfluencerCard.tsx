import { Star, MoreVertical } from 'lucide-react';

interface InfluencerCardProps {
  name: string;
  avatar: string;
  platform: string;
  followers: string;
  satireRating: number;
  featured: boolean;
}

const InfluencerCard = ({ name, avatar, platform, followers, satireRating, featured }: InfluencerCardProps) => {
  return (
    <div className={`bg-gray-800 rounded-xl p-4 ${featured ? 'border-2 border-yellow-400' : ''}`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
          <div>
            <h3 className="font-medium text-white">{name}</h3>
            <p className="text-sm text-gray-400">{platform}</p>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-700">
          <MoreVertical size={16} />
        </button>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400">Followers</p>
          <p className="font-medium">{followers}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Satire Rating</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < satireRating ? 'text-yellow-400' : 'text-gray-600'} 
                fill={i < satireRating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
      
      {featured && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
            Featured in next episode
          </span>
        </div>
      )}
    </div>
  );
};

export default InfluencerCard;
