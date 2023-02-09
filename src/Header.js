import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand className='top1'> <span  className="top">Design</span>  <br /> AGENCY</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav.Item>
                        <Nav.Link className="link" href="/" >Specialization in </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="/Casestudy">Case Study</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="/Process">Process</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="/Industries">Industries</Nav.Link>
                    </Nav.Item>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a className="link1" href="/CallUs">{props.name1}</a>
                            <a className="link2"href="/Hiring">{props.name2}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
