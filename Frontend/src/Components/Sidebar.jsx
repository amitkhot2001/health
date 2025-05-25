import {
  LayoutDashboard,
  ArrowUpDown,
  CalendarDays,
  Plus,
  ChartLine,
  MessageCircleMore,
  Phone,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-blue-50 shadow-sm rounded-s-4xl p-4 flex flex-col">
      <div className="flex items-center justify-center m-8">
        <span className="text-sky-500 text-3xl">Health</span>
        <span className="text-3xl text-blue-800">Care</span>
      </div>

      <ul className="flex flex-col ml-8">
        <li className="mb-2 text-gray-400">General</li>

        <li className="flex items-center mb-2 cursor-pointer">
          <LayoutDashboard />
          <span className="ml-2 text-gray-700">Dashboard</span>
        </li>

        <li className="flex items-center mb-2 cursor-pointer">
          <ArrowUpDown />
          <span className="ml-2 text-gray-700">History</span>
        </li>

        <li className="flex items-center mb-2 cursor-pointer">
          <CalendarDays />
          <span className="ml-2 text-gray-700">Calendar</span>
        </li>

        <li className="flex items-center mb-2 cursor-pointer">
          <Plus />
          <span className="ml-2 text-gray-700">Appointment</span>
        </li>

        <li className="flex items-center mb-2 cursor-pointer">
          <ChartLine />
          <span className="ml-2 text-gray-700">Statistics</span>
        </li>

        <li className="mb-2 text-gray-500 mt-4">Tools</li>

        <li className="flex items-center mb-2 cursor-pointer">
          <MessageCircleMore />
          <span className="ml-2 text-gray-700">Chat</span>
        </li>

        <li className="flex items-center mb-2 cursor-pointer">
          <Phone />
          <span className="ml-2 text-gray-700">Support</span>
        </li>
      </ul>

      <div className="flex-grow"></div>

      <div className="flex items-center mt-auto cursor-pointer ml-8">
        <Settings />
        <span className="ml-2 text-gray-700">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
