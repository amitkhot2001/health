import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import { Search } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen p-2.5 bg-blue-50">
        <div className="w-full h-full bg-white shadow-sm rounded-4xl p-1.5 flex">
          <Sidebar />

          <div className="w-full max-w-2xl h-full p-4 flex-1">
            <div className="relative w-full mt-8">

              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-amber-950">
                <Search />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full text-black border-2 border-amber-950 rounded focus:outline-none"
              />
              <span className="">
                <Search />
              </span>

              
            </div>

          </div>

          <div className="w-full max-w-3xl h-full bg-blue-50 shadow-sm rounded-r-4xl p-4 flex-1"></div>
        </div>
      </div>
    </>
  )
}

export default App
