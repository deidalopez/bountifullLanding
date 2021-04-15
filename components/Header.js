import React, {useState, useEffect} from 'react'; 
import Image from 'next/image';

import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [sticky, setSticky] = useState(false); 
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky? ' sticky' : '' }`} >
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <Image
              src="/assets/logo.png"
              layout="intrinsic"
              width={100}
              height={100}
            />
          </NavbarBrand>
          <NavbarToggler onClick = {toggle} /> 
          <Collapse isOpen={isOpen} navbar>
            <Nav className = "m-auto" navbar>
              <NavItem>
                <NavLink href="#hero">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )

}

export default Header;