import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function App() {
  
  // const navigate = useNavigate()

  // const handleLogut = async (e) => {
  //   e.preventDefault()

  //   const res = await axios.post('/api/logout')

  //   if(res.data.success) {
  //     navigate('/')
  //   } else {
  //     alert('Failed to logout. Try again later.')
  //   }
  // }
  
  return (
    <>  
    <ul>
      <li>
          <Link to="/">Landing Page</Link>
      </li>

      <li>
          <Link to="/login">Login Page</Link>
      </li>

      <li>
          <Link to="/about">About Page</Link>
      </li>

      {/* <li>
          <Link to="/me">Your Account/Profile Page</Link>
      </li> */}

      {/* <li>
          <LogoutButton onLogout={handleLogut} />
      </li> */}

    </ul>
    <Outlet />
    </>
)
}
export default App