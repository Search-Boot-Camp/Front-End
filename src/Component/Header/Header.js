import {Navbar, Nav, Container, Form, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from './../../img/logo.png';
import find from './../../img/find.png';

const Header = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const onSubmit = () => {
        {
            // https://velog.io/@soryeongk/ReactRouterDomV6
            navigate('/search',{search})
        }
    };

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <div className='header-box'>
                <Navbar>
                    <Container className="container-box">
                        <Navbar.Brand href="/">
                            <img alt="" src={logo} width="30" height="30"
                                className="d-inline-block align-top"/>{' '}
                            Search Boot Camp
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/search">부트 캠프 찾기</Nav.Link>
                        </Nav>
                        <Form className='form' onSubmit={onSubmit}>
                            <Form.Control type="string" onChange={onChange} placeholder="찾고 싶은 부트캠프를 검색하세요! "/>
                            <Button variant="secondary" type="submit" id="findbt">
                                <img alt="" src={find} width="23" height="24"/>
                            </Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;