import React from 'react'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <sideBar/>
      </div>
    </div>
  )
}

export default App