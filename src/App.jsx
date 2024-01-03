import axios from 'axios';
import { useState, useEffect } from 'react'
import React from 'react'
import About from './components/About.jsx'


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

    </ul>
    <Outlet />
    </>
)
}
export default App



// everything moved to landing page inside function app
/// inside the new app is the nav bar (the links) and 'outlet'


// 1. do landing page
// 2. redo the app (with links and outlet)
// 3. redo main with proper format of child partent routes










