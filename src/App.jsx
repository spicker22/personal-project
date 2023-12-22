import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import LandingPage from './components/LandingPage.jsx'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';  
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>

      <main>
        <Outlet />
      </main>


    </>
  )
}

export default App
