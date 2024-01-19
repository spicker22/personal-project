import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

function Footer() {
    return (
        <footer className='footer'>
            <Nav.Link as={Link} to="/about" className="about">About</Nav.Link>
            <p>© 2024 Lightpost Health</p>
           
        </footer>
    );
}

export default Footer;