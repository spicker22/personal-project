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
                        <Nav.Link as={Link} to="/login" className="custom-nav-link2">{userId ? `User ${userId}` : 'Login'}</Nav.Link>
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