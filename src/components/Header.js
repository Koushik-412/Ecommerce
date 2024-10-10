import React from 'react'
import {Button,Container,Form,Nav,Navbar} from 'react-bootstrap';


function Header({search,setsearch}) {

  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><i class="fa-brands fa-joomla"></i>Ecom.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Button variant="dark"><i class="fa-brands fa-searchengin"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
