import React from 'react';
import styled from 'styled-components';

const PrimaryBtn = styled.button`
  background-color: ${({ primary, secondary }) =>
    primary ? 'var(--primary-color)' : secondary ? 'var(--black-color)' : null};
  border-radius: 12px;
  padding: 16px 40px;
  border: none;
  color: #ffffff;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  cursor: pointer;
`;

const Button = ({ primary, secondary, text }) => {
  return (
    <PrimaryBtn primary={primary} secondary={secondary}>
      {text}
    </PrimaryBtn>
  );
};

export default Button;
