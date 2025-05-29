import { useState } from 'react';
import {
  LayoutDashboard,
  ArrowUpDown,
  CalendarDays,
  Plus,
  ChartLine,
  MessageCircleMore,
  Phone,
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { section: 'General', type: 'header' },
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ArrowUpDown, label: 'History' },
    { icon: CalendarDays, label: 'Calendar' },
    { icon: Plus, label: 'Appointment' },
    { icon: ChartLine, label: 'Statistics' },
    { section: 'Tools', type: 'header' },
    { icon: MessageCircleMore, label: 'Chat' },
    { icon: Phone, label: 'Support' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        w-64 h-full
        bg-blue-50 shadow-sm
        md:rounded-l-2xl
        p-4 flex flex-col
        transition-transform duration-300 ease-in-out
        z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 mt-4 md:mt-8">
          <span className="text-sky-500 text-2xl sm:text-3xl font-bold">Health</span>
          <span className="text-2xl sm:text-3xl text-blue-800 font-bold">Care</span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              item.type === 'header' ? (
                <li key={index} className="mt-4 mb-2 px-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {item.section}
                  </span>
                </li>
              ) : (
                <li key={index}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5 rounded-lg
                      transition-all duration-200
                      ${item.active 
                        ? 'bg-white shadow-sm text-blue-800 font-medium' 
                        : 'text-gray-700 hover:bg-white hover:shadow-sm hover:text-blue-800'
                      }
                    `}
                  >
                    <item.icon size={20} />
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </button>
                </li>
              )
            ))}
          </ul>
        </nav>

        {/* Settings - Bottom */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-white hover:shadow-sm hover:text-blue-800 transition-all duration-200"
          >
            <Settings size={20} />
            <span className="text-sm sm:text-base">Settings</span>
          </button>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;