import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>  
    <ul>
      <li>
          <Link to="/">Landing Page</Link>
      </li>

      <li>
          <Link to="/about">About Page</Link>
      </li>

      <li>
          <Link to="/login">Login Page</Link>
      </li>

    </ul>
    <Outlet />
    </>
)
}
export default App