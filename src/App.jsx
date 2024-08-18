import { Outlet } from 'react-router-dom'

import Navbar3 from './pages/components/Navbar3'
import Footer from './pages/components/Footer'
import './App.css'
import Footer from './pages/components/Footer'

function App() {
  return (
    <>
     <Navbar3/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
