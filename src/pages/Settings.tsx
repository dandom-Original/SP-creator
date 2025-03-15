import { useState } from 'react';
import { Save, Bot, Bell, Shield, CreditCard, HelpCircle } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>('account');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'ai':
        return <AISettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'billing':
        return <BillingSettings />;
      case 'help':
        return <HelpSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your preferences and account settings</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 bg-gray-800 rounded-xl p-4">
          <nav>
            <button
              onClick={() => setActiveTab('account')}
              className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 ${
                activeTab === 'account' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="w-8">👤</span>
              Account
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 ${
                activeTab === 'ai' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Bot size={18} className="mr-2 ml-0.5" />
              AI Integration
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 ${
                activeTab === 'notifications' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Bell size={18} className="mr-2 ml-0.5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 ${
                activeTab === 'privacy' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Shield size={18} className="mr-2 ml-0.5" />
              Privacy & Safety
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 ${
                activeTab === 'billing' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <CreditCard size={18} className="mr-2 ml-0.5" />
              Billing
            </button>
            <button
              onClick={() => setActiveTab('help')}
              className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 ${
                activeTab === 'help' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <HelpCircle size={18} className="mr-2 ml-0.5" />
              Help & Support
            </button>
          </nav>
        </div>
        
        <div className="flex-1 bg-gray-800 rounded-xl p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const AccountSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Account Settings</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Profile Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Display Name</label>
              <input 
                type="text" 
                defaultValue="InfluSatire Studio" 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <input 
                type="email" 
                defaultValue="contact@influsatire.com" 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Studio Bio</label>
              <textarea 
                rows={3}
                defaultValue="Creating South Park-style satire of influencers since 2023. Turning social media absurdity into comedic gold."
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Studio Branding</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Logo</label>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <FilmIcon size={28} className="text-yellow-400" />
                </div>
                <button className="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg">
                  Change Logo
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Brand Color</label>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg mr-4"></div>
                <input 
                  type="text" 
                  defaultValue="#EAB308" 
                  className="w-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const AISettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">AI Integration</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">OpenRouter Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">API Key</label>
              <input 
                type="password" 
                defaultValue="sk-or-v1-••••••••••••••••••••••••" 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Model</label>
              <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>anthropic/claude-3-opus</option>
                <option>anthropic/claude-3-sonnet</option>
                <option selected>openai/gpt-4-turbo</option>
                <option>google/gemini-pro</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Content Generation Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Default Satire Style</label>
              <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option selected>South Park</option>
                <option>The Simpsons</option>
                <option>Rick and Morty</option>
                <option>Family Guy</option>
                <option>Custom...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Satire Intensity</label>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Mild</span>
                <span>Medium</span>
                <span>Spicy</span>
              </div>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="auto-generate" 
                defaultChecked 
                className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
              />
              <label htmlFor="auto-generate" className="ml-2 text-sm font-medium">
                Auto-generate content ideas based on trending topics
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-md font-medium mb-2">Automated Workflow</h3>
          <p className="text-sm text-gray-300 mb-3">
            Choose what the AI should generate automatically:
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="script" 
                defaultChecked 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="script" className="ml-2 text-sm">
                Episode Scripts
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="character" 
                defaultChecked 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="character" className="ml-2 text-sm">
                Character Designs
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="thumbnails" 
                defaultChecked 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="thumbnails" className="ml-2 text-sm">
                Thumbnails & Promotional Images
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="marketing" 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="marketing" className="ml-2 text-sm">
                Marketing Copy
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
            <Save size={18} className="mr-2" />
            Save AI Settings
          </button>
        </div>
      </div>
    </div>
  );
};

const NotificationSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="flex items-center justify-between border-b border-gray-700 pb-3">
            <div>
              <p className="font-medium">Content Performance Updates</p>
              <p className="text-sm text-gray-400">Get weekly performance reports for your content</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between border-b border-gray-700 pb-3">
            <div>
              <p className="font-medium">Revenue Alerts</p>
              <p className="text-sm text-gray-400">Notifications about significant revenue changes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">AI-Generated Content</p>
              <p className="text-sm text-gray-400">Get notified when new AI content is ready for review</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Platform Notifications</h3>
          <div className="flex items-center justify-between border-b border-gray-700 pb-3">
            <div>
              <p className="font-medium">Comments & Engagement</p>
              <p className="text-sm text-gray-400">Notifications about viewer interactions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between border-b border-gray-700 pb-3">
            <div>
              <p className="font-medium">Trending Topics</p>
              <p className="text-sm text-gray-400">Get notified about trending topics for potential content</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">System Updates</p>
              <p className="text-sm text-gray-400">Notifications about platform updates and maintenance</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
            <Save size={18} className="mr-2" />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

const PrivacySettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Privacy & Safety Settings</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Content Privacy</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Default Content Visibility</label>
              <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option selected>Public - Available to everyone</option>
                <option>Members Only - Subscribers only</option>
                <option>Private - Only you can view</option>
              </select>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="comments" 
                defaultChecked 
                className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
              />
              <label htmlFor="comments" className="ml-2 text-sm font-medium">
                Enable comments on all content
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="attribution" 
                defaultChecked 
                className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
              />
              <label htmlFor="attribution" className="ml-2 text-sm font-medium">
                Display content attributions and disclaimers
              </label>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Content Moderation</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Comment Moderation</label>
              <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>No moderation - All comments appear immediately</option>
                <option selected>Basic moderation - Filter obvious spam and abuse</option>
                <option>Strict moderation - Approve all comments manually</option>
              </select>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="ai-moderation" 
                defaultChecked 
                className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
              />
              <label htmlFor="ai-moderation" className="ml-2 text-sm font-medium">
                Use AI to automatically moderate problematic comments
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-md font-medium mb-2">Legal Compliance</h3>
          <p className="text-sm text-gray-300 mb-3">
            Make sure your satirical content complies with required legal standards:
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="disclaimer" 
                defaultChecked 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="disclaimer" className="ml-2 text-sm">
                Add satire disclaimer to all content
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="copyright" 
                defaultChecked 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="copyright" className="ml-2 text-sm">
                Enable copyright compliance review
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="defamation" 
                defaultChecked 
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded focus:ring-yellow-500"
              />
              <label htmlFor="defamation" className="ml-2 text-sm">
                Enable AI review for potential defamation risk
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
            <Save size={18} className="mr-2" />
            Save Privacy Settings
          </button>
        </div>
      </div>
    </div>
  );
};

const BillingSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Billing & Subscription</h2>
      
      <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <div className="flex items-start">
          <div className="p-2 rounded-lg bg-yellow-500/20 mr-4">
            <CreditCard size={24} className="text-yellow-400" />
          </div>
          <div>
            <h3 className="font-medium">Creative Pro Plan</h3>
            <p className="text-sm text-gray-300 mt-1">$49.99/month - Renews on August 15, 2023</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Payment Method</h3>
          <div className="bg-gray-700 rounded-lg p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-6 bg-blue-500 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">VISA</div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-gray-400">Expires 05/2025</p>
              </div>
            </div>
            <button className="text-sm text-yellow-400 hover:underline">Change</button>
          </div>
          <button className="text-sm text-yellow-400 hover:underline">+ Add new payment method</button>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Billing History</h3>
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-600">
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Description</th>
                  <th className="py-2 px-4 text-right">Amount</th>
                  <th className="py-2 px-4 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-600">
                  <td className="py-3 px-4">Jul 15, 2023</td>
                  <td className="py-3 px-4">Creative Pro Plan - Monthly</td>
                  <td className="py-3 px-4 text-right">$49.99</td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-yellow-400 hover:underline">Download</button>
                  </td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="py-3 px-4">Jun 15,  2023</td>
                  <td className="py-3 px-4">Creative Pro Plan - Monthly</td>
                  <td className="py-3 px-4 text-right">$49.99</td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-yellow-400 hover:underline">Download</button>
                  </td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="py-3 px-4">May 15, 2023</td>
                  <td className="py-3 px-4">Creative Pro Plan - Monthly</td>
                  <td className="py-3 px-4 text-right">$49.99</td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-yellow-400 hover:underline">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Plan Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Creative Pro</h4>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">Current</span>
              </div>
              <p className="text-2xl font-bold mb-2">$49.99<span className="text-sm font-normal text-gray-400">/month</span></p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Unlimited content generation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Advanced AI features
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Priority rendering
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Premium influencer database
                </li>
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                Current Plan
              </button>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="font-medium mb-2">Creative Pro Annual</h4>
              <p className="text-2xl font-bold mb-2">$479.99<span className="text-sm font-normal text-gray-400">/year</span></p>
              <p className="text-green-400 text-sm mb-2">Save $120 compared to monthly</p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> All Pro features
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 2 months free
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Premium support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Early access to new features
                </li>
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-medium transition-colors">
                Upgrade & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HelpSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Help & Support</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div>
              <button className="flex justify-between items-center w-full text-left font-medium pb-2 border-b border-gray-600">
                <span>How does the AI content generation work?</span>
                <span>+</span>
              </button>
            </div>
            <div>
              <button className="flex justify-between items-center w-full text-left font-medium pb-2 border-b border-gray-600">
                <span>Can I export my content to other platforms?</span>
                <span>+</span>
              </button>
            </div>
            <div>
              <button className="flex justify-between items-center w-full text-left font-medium pb-2 border-b border-gray-600">
                <span>How are monetization payments processed?</span>
                <span>+</span>
              </button>
            </div>
            <div>
              <button className="flex justify-between items-center w-full text-left font-medium pb-2 border-b border-gray-600">
                <span>What legal considerations should I be aware of?</span>
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <HelpCircle size={20} className="mr-2 text-yellow-400" />
              <h3 className="text-lg font-medium">Contact Support</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Our support team is available 24/7 to help with any issues you might encounter.
            </p>
            <button className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors">
              Contact Support
            </button>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Bot size={20} className="mr-2 text-yellow-400" />
              <h3 className="text-lg font-medium">AI Assistant</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Get immediate help from our AI assistant with platform features and troubleshooting.
            </p>
            <button className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white font-medium rounded-lg transition-colors">
              Chat with Assistant
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Documentation & Tutorials</h3>
          <div className="space-y-3">
            <div className="bg-gray-700 rounded-lg p-4 flex items-center">
              <div className="w-10 h-10 rounded bg-gray-600 flex items-center justify-center mr-3 text-yellow-400">
                📖
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Platform Guide</h4>
                <p className="text-sm text-gray-400">Complete documentation of all features</p>
              </div>
              <button className="text-yellow-400 hover:underline">View</button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 flex items-center">
              <div className="w-10 h-10 rounded bg-gray-600 flex items-center justify-center mr-3 text-yellow-400">
                🎬
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Video Tutorials</h4>
                <p className="text-sm text-gray-400">Step-by-step video guides for all features</p>
              </div>
              <button className="text-yellow-400 hover:underline">View</button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 flex items-center">
              <div className="w-10 h-10 rounded bg-gray-600 flex items-center justify-center mr-3 text-yellow-400">
                🔍
              </div>
              <div className="flex-1">
                <h4 className="font-medium">AI Content Best Practices</h4>
                <p className="text-sm text-gray-400">Tips for creating effective satirical content</p>
              </div>
              <button className="text-yellow-400 hover:underline">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing import
const FilmIcon = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || "24"} 
      height={props.size || "24"} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={props.className}
    >
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
  );
};

export default Settings;
