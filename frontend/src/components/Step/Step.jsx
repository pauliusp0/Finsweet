import React from 'react';
import styled from 'styled-components';
import { Title01, Body01 } from '../Global.style';
import PropTypes from 'prop-types';

const StyledStep = styled.div`
  width: 432px;
  height: 165px;
  display: flex;
  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Line = styled.div`
  border: 2px dashed #ff6433;
  transform: rotate(90deg);
  width: 71px;
  margin-bottom: 45px;
`;

const Circle = styled.div`
  background-color: var(--secondary-color);
  border-radius: 50px;
  width: 72px;
  height: 72px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 24px;

    /* identical to box height, or 75% */

    color: #ffffff;
  }
`;

const Text = styled.div`
  width: 336px;
  margin-left: 34px;
  margin-top: 13px;
  p:first-child {
    margin-bottom: 8px;
  }
`;

const HalfCircle = styled.div`
  background: rgba(255, 255, 255, 0.24);
  border-radius: 50px;
  width: 42px;
  height: 42px;
  position: absolute;
  top: 51px;
`;

const Step = ({ title, body, number, line }) => {
  return (
    <StyledStep>
      <div>
        <Circle>
          <HalfCircle></HalfCircle>
          <span>{number}</span>
        </Circle>

        {line && <Line />}
      </div>
      <Text>
        <Title01>{title}</Title01>
        <Body01>{body}</Body01>
      </Text>
    </StyledStep>
  );
};

export default Step;

Step.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
