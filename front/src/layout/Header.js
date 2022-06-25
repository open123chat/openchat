import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';


const Header = () => {
  const[logbar,setLogbar] = useState(true);
  let username = localStorage.getItem('username')

  const logout =() =>{
    alert('로그아웃 되었습니다.')
    setLogbar(false);
    localStorage.clear();
  }
  return ( 
      <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to = "/" className="navbar-brand">Home</Link>
              <Nav className="mr-auto">
                {
                  username == null
                  ? <Link to = "/login" className="nav-link">로그인</Link> 
                  : 
                    <>
                      <Link to = "" className='nav-link'>사용자 : {username}</Link>
                      <Link to = "/" className="nav-link" onClick={()=>{logout()}}>로그아웃</Link>
                    </>
                }
              </Nav>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              
            </Nav>

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
};

export default Header;