import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Pendapatan from './Pendapatan'
import Pesanan from './Pesanan'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pendapatan" element={<Pendapatan />} />
          <Route path="/pesanan" element={<Pesanan />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App