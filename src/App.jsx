import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Footer from './components/Footer';
import './App.css'
import { useSelector } from 'react-redux';
// import LogoutButton from './components/Logout.jsx';

function App() {
    const userId = useSelector(state => state.id);
    return (
        <>
            <Navbar className="w-100" data-bs-theme="dark">
                <Container>
                    <div className="nav-container">
                        <Nav.Link as={Link} to="/" className="custom-nav-link1">Lightpost Health</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="custom-nav-link2">{userId ? `User Dan` : 'Login'}</Nav.Link>
                        {/* <Nav.Link as={Link} to="/login" className="custom-nav-link2">{userId ? `User ${userId}` : 'Login'}</Nav.Link> */}
                        
                    </div>
                </Container>
            </Navbar>
            <br></br>
            <div class="full-width-line-top"></div>
            <br></br>
            <Outlet />
            <br></br>
            <div class="full-width-line-bottom"></div>
            <br></br>
            <Footer />
        </>
    )
}
export default App

















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