import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import { Search } from 'lucide-react'
// import Dropdown from './Components/Dropdown'
import DashboardMainContent from './Components/DashboardMainContent'
import Calendar from './Components/CalendarView'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen p-2.5 bg-blue-50 overflow-auto">
      <div className="w-full h-full bg-white shadow-sm rounded-2xl p-1.5 flex flex-col md:flex-row">

        <div className="w-full md:w-[250px] bg-white">
          <Sidebar />
        </div>

        <div className="flex flex-1 flex-col md:flex-row w-full h-full">

          <div className="w-full md:w-1/2 h-full p-4">
            <div className="relative w-full mt-8">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-amber-950">
                <Search />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full text-black border-2 border-amber-950 rounded focus:outline-none"
              />
            </div>

              <DashboardMainContent />
            
          </div>


          <div className="w-full md:w-1/2 h-full bg-blue-50 shadow-sm  md:rounded-r-2xl p-4"><Calendar /></div>
        </div>
      </div>
    </div>
  )
}

export default App
