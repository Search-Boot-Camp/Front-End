import {Navbar, Nav, Container, Form, Button} from 'react-bootstrap';
import React from 'react';
import './Header.css';
import logo from './../../img/logo.png';
import find from './../../img/find.png';

const Header = () => {
    return (<div>
        <div className='header-box'>
            <Navbar>
                <Container className="container-box">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"/>{' '}
                        Search Boot Camp
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#search">부트 캠프 찾기</Nav.Link>
                    </Nav>
                    <Form>
                        <Form.Control type="string" placeholder="입력"/>
                    </Form>
                    <Button variant="secondary" type="submit">
                        <img 
                            alt="" 
                            src={find}
                            width="23"
                            height="23"
                            />
                    </Button>
                </Container>
            </Navbar>
        </div>
        </div>
        );
};

export default Header;