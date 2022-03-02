import React from 'react';
import styled from 'styled-components';

import { Body01 } from '../Global.style';
import arrow from '../../assets/arrow.svg';

const StyledArrow = styled.div`
  display: flex;
  gap: 21px;
  align-items: center;
  cursor: pointer;
  p {
    opacity: 1;
  }
`;

const Arrow = ({ text }) => {
  return (
    <StyledArrow>
      <Body01>{text}</Body01>
      <img src={arrow} alt='' />
    </StyledArrow>
  );
};

export default Arrow;
