import React from 'react';
import './navbar.css';
import {
  Nav,
  NavLink,
  NavLinkh,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbarelements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLinkh to='/' className='header'>
        <div className='medclass'>MED</div>
        <div className='botclass'>BOT</div>
        </NavLinkh>
        <Bars />

        <NavMenu>
        <NavLink to='/' activestyle="true">
            Home
          </NavLink>
          <NavLink to='/Letschat' activestyle="true">
            Let's Chat
          </NavLink>
          <NavLink to='/about' activestyle="true">
            About
          </NavLink>
          <NavLink to='/sign-up' activestyle="true">
            Sign Up/In
          </NavLink>
          
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/*<NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
  </NavBtn>*/}
      </Nav>
    </>
  );
};

export default Navbar;