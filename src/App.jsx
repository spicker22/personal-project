// import React from 'react'
// import { Link, Outlet} from 'react-router-dom'

// function App() {
  
//   return (
//     <>  
//     <ul>
//       <li>
//           <Link to="/">Landing Page</Link>
//       </li>

//       <li>
//           <Link to="/login">Login Page</Link>
//       </li>

//       <li>
//           <Link to="/about">About Page</Link>
//       </li>

//       {/* <li>
//           <Link to="/me">Your Account/Profile Page</Link>
//       </li> */}

//       {/* <li>
//           <LogoutButton onLogout={handleLogut} />
//       </li> */}

//     </ul>
//     <Outlet />
//     </>
// )
// }
// export default App
























import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Lightpost Health
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}

export default App;




























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