import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button';
import { Body01 } from '../Global.style';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 550px;
  display: flex;
  flex-direction: row-reverse;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HeaderRight = styled.div`
  width: 733px;
  background-color: var(--black-color);
  padding: 96px;
  h1,
  p {
    color: white;
  }
  h1 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 48px;
    color: #f2f2f2;
    opacity: 1;
  }
`;
const HeaderLeft = styled.div`
  width: 815px;
  height: 550px;
  position: absolute;
  left: 0px;
  z-index: -1;
`;

const Header = ({ img, title, body }) => {
  return (
    <StyledHeader>
      <HeaderRight>
        <h1>{title}</h1>
        <Body01>{body}</Body01>
        <Button primary text='Book a service' />
      </HeaderRight>
      <HeaderLeft>
        <img src={img} alt='' />
      </HeaderLeft>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
