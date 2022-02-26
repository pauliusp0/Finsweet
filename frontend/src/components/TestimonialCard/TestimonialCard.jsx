import React from 'react';

import styled from 'styled-components';
import { Body02, Title02 } from '../Global.style';

export const TestimonialCardStyled = styled.div`
  width: 616px;
  height: 376px;

  background: #ffffff;
  border: 1px solid rgba(172, 172, 172, 0.29);
  box-sizing: border-box;
  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  padding: 72px;
  > div {
    display: flex;
    gap: 16px;
    img {
      width: 64px;
      height: 64px;

      border-radius: 151px;
      margin-bottom: 24px;
    }
  }
`;

const TestimonialCard = ({ info }) => {
  const { logo, name, location, description } = info;
  console.log(info);
  return (
    <TestimonialCardStyled>
      <div>
        <img src={logo} alt='' />
        <div>
          <Title02>{name}</Title02>
          <Body02>{location}</Body02>
        </div>
      </div>
      <Title02>{description}</Title02>
    </TestimonialCardStyled>
  );
};

export default TestimonialCard;
