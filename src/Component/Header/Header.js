import {Navbar, Nav, Container} from 'react-bootstrap';
import React from 'react';
import './Header.css';
import logo from './../../img/logo.png';
import search from './../../img/Search.png';
import desktop from './../../img/Desktop.png';
import user from './../../img/User.png';

const Header = () => {

    return (
        <div>
                <Navbar className='header-box'>
                    <Container className="container-box">
                        <div>
                            <Navbar.Brand className="sbcname" href="/">
                                <img alt="" src={logo} width="30" height="30"/>{' '}
                                <p>Search Boot Camp</p>
                            </Navbar.Brand>
                        </div>
                        <div>
                            <Nav className="me-auto">
                                {/* <Nav.Link href="/">Home</Nav.Link> */}
                                <Nav.Link href="/search">
                                    <img id="magnifier" alt="" src={search} width="30" height="30"/>
                                </Nav.Link>
                                <Nav.Link href="/">
                                    <img id="desktop" alt="" src={desktop} width="30" height="30"/>
                                </Nav.Link>
                                <Nav.Link href="/introduce">
                                    <img id="user" alt="" src={user} width="30" height="30"/>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;