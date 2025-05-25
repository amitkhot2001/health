import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen p-2.5 bg-blue-50">
        

        <div className=" w-full h-full bg-white shadow-sm rounded-4xl p-1.5 flex">

          <div className=" w-64 h-full bg-blue-50 shadow-sm rounded-s-4xl p-4 ">

          </div>

          <div className=" w-2xl h-full bg-white shadow-sm p-4 flex-1 ">

          </div>

          <div className=" w-3xl h-full bg-blue-50 shadow-sm rounded-r-4xl p-4 flex-1 ">

          </div>

        </div>

      </div>

    </>

  )
}

export default App
