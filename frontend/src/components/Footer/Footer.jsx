import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// icons
import FacebookIcon from '../../assets/Facebook.svg';
import TwitterIcon from '../../assets/Twitter.svg';
import InstagramIcon from '../../assets/Instagram.svg';
import LinkedInIcon from '../../assets/Linkedin.svg';
import Logo from '../../assets/Logo-white.svg';

import { Body01, Body02, Container, Title02 } from '../Global.style';

const FooterTopStyled = styled.section`
  height: 549px;
  background: var(--black-color);
  opacity: 0.98;
  > section {
    display: flex;
    padding-top: 128px;
    gap: 193px;
  }
`;

const FooterLeft = styled.div`
  width: 463px;
  height: 222px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  h3 {
    color: #ffffff;
  }
  > div {
    display: flex;
    gap: 23.67px;
  }
`;

const FooterRight = styled.div`
  width: 471px;
  height: 292px;
  p {
    color: white;
    margin: 8px;
  }
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FooterTop = () => {
  return (
    <FooterTopStyled>
      <Container>
        <FooterLeft>
          <h3>Get in touch with us for your service</h3>
          <div>
            <img src={FacebookIcon} alt='' />
            <img src={TwitterIcon} alt='' />
            <img src={InstagramIcon} alt='' />
            <img src={LinkedInIcon} alt='' />
          </div>
        </FooterLeft>
        <FooterRight>
          <div>
            <Body01>Help line Number</Body01>
            <Title02>1800 265 24 52</Title02>
          </div>
          <div>
            <Body01>Address</Body01>
            <Title02>NH 234 Public Square San Francisco 65368</Title02>
          </div>
          <div>
            <Body01>We are open</Body01>
            <Title02>Monday to Friday 9:00 AM to 10:00 AM</Title02>
          </div>
        </FooterRight>
      </Container>
    </FooterTopStyled>
  );
};

const FooterBottomStyled = styled.section`
  height: 157px;
  width: 100%;
  background: var(--black-color);

  > section {
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
  p {
    color: #939191;
  }
`;

const Menu = styled.div`
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
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const Footer = () => {
  const [top, setTop] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/contact') setTop(false);
    else setTop(true);
  }, [location]);
  return (
    <footer>
      {top && FooterTop()}
      <FooterBottomStyled>
        <Container>
          <img src={Logo} alt='' />
          <Menu>
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
          </Menu>
          <Body02>@ Copyright Finsweet 2021</Body02>
        </Container>
      </FooterBottomStyled>
    </footer>
  );
};

export default Footer;
