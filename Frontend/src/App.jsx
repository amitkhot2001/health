import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import { Search } from 'lucide-react'
import DashboardMainContent from './Components/DashboardMainContent'
import MedicalCalendar from './Components/CalendarView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen p-0 md:p-2.5 bg-blue-50 overflow-hidden">
      <div className="w-full h-full bg-white shadow-sm md:rounded-2xl flex flex-col md:flex-row relative">

        {/* Sidebar - Mobile responsive */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col lg:flex-row w-full h-full overflow-hidden">

          {/* Dashboard Section */}
          <div className="w-full lg:w-1/2 h-full p-4 pt-16 md:pt-4 overflow-y-auto">
            <div className="relative w-full mb-4 md:mb-6">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-amber-950">
                <Search size={20} />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2.5 w-full text-black border-2 border-amber-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-950 focus:ring-opacity-20 transition-all"
              />
            </div>

            <DashboardMainContent />
          </div>

          {/* Calendar Section */}
          <div className="w-full lg:w-1/2 h-full bg-blue-50 shadow-sm lg:rounded-r-2xl p-4 overflow-y-auto">
            <MedicalCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App