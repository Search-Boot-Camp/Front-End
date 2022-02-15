import {Navbar, Nav, Container} from 'react-bootstrap';
import React from 'react';
import './Header.css';
import logo from './../../img/logo.png';

const Header = () => {

    return (
        <div>
            <div className='header-box'>
                <Navbar>
                    <Container className="container-box">
                        <Navbar.Brand className="sbcname" href="/">
                            <img alt="" src={logo} width="30" height="30" />{' '}
                            <p>Search Boot Camp</p>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/search">부트 캠프 찾기</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;