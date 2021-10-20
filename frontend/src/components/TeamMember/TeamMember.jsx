import React from 'react';
import styled from 'styled-components';
import { Title02, Body02 } from '../Global.style';
import PropTypes from 'prop-types';

const Person = styled.div`
  position: absolute;
  width: 405px;
  height: 432px;
  display: flex;
  z-index: -1;
  > div {
    position: absolute;
    width: 100%;
    height: 116px;
    background-color: var(--black-color);
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    p {
      color: #ffffff;
    }
    p:first-child {
      margin-top: 24px;
    }
  }
`;

const TeamMember = ({ img, title, body }) => {
  return (
    <Person>
      <div>
        <Title02>{title}</Title02>
        <Body02>{body}</Body02>
      </div>
      <img src={img} alt='' />
    </Person>
  );
};

export default TeamMember;

Step.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
