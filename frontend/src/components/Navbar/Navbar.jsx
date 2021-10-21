import React from 'react';
import styled from 'styled-components';
import { Body01, Caption, Container } from '../Global.style';
import { Link } from 'react-router-dom';

// icons
import Logo from '../../assets/Logo.svg';
import DialIcon from '../../assets/Assistance-Icon.svg';

const StyledNavbar = styled.header`
  > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
  }
`;

const Line = styled.div`
  opacity: 0.36;
  /* Grey */
  border: 1px solid #939191;
  transform: rotate(90deg);
  width: 42px;
  margin: 12px;
`;

const Assistance = styled.div`
  width: 181px;
  height: 56px;
  display: flex;
  gap: 14px;
  align-items: center;
  margin-right: 20px;

  p {
    opacity: 1;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    li {
      list-style: none;
      /* padding: 20px; */
      padding-left: 40px;
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
      <Container>
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
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
