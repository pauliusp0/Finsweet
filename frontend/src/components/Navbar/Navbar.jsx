import React from 'react';
import Logo from '../../assets/Logo.png';
import DialIcon from '../../assets/Assistance-Icon.svg';
import styled from 'styled-components';
import { Body01, Caption } from '../Global.style';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 90px;
  align-items: center;
`;

const Line = styled.div`
  opacity: 0.36;

  /* Grey */
  border: 1px solid #939191;
  transform: rotate(90deg);
  width: 42px;
`;

const Assistance = styled.div`
  display: flex;
  gap: 14px;
  p {
    opacity: 1;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    li {
      list-style: none;
      padding: 20px;
      /* Body 02 */
      font-family: Manrope;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      /* Black */
    }
  }
  a {
    text-decoration: none;
    color: var(--black-color);
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <img src={Logo} alt='' />
      </div>
      <NavbarRight>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-us'>About us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Line />
        <Assistance>
          <img src={DialIcon} alt='' />
          <div>
            <Caption>Road Assistance</Caption>
            <Body01>1800 265 24 52</Body01>
          </div>
        </Assistance>
      </NavbarRight>
    </StyledNavbar>
  );
};

export default Navbar;
