import { Video, DollarSign, Users, BarChart2, Settings, FilmIcon } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Sidebar = ({ currentPage, setCurrentPage }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart2 size={20} /> },
    { id: 'content', name: 'Content', icon: <Video size={20} /> },
    { id: 'monetization', name: 'Monetization', icon: <DollarSign size={20} /> },
    { id: 'influencers', name: 'Influencers', icon: <Users size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 bg-gray-800 h-full flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <FilmIcon size={28} className="text-yellow-400" />
        <span className="text-xl font-bold">InfluSatire</span>
      </div>
      
      <nav className="flex-1 mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center w-full px-6 py-3 transition-colors ${
                  currentPage === item.id
                    ? 'bg-gray-700 text-yellow-400 border-l-4 border-yellow-400'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-4">{item.icon}</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="bg-gray-700 p-3 rounded-lg">
          <h3 className="font-medium">Pro Tip</h3>
          <p className="text-sm text-gray-300 mt-1">
            Create AI-driven content with one click using the OpenRouter integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
