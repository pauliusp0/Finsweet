import React from 'react';
import styled from 'styled-components';
import { Title02 } from '../Global.style';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: #ffffff;
  /* width: 316px; */
  height: 232px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 12px;
  img {
    margin-top: 76px;
  }

  &:hover {
    background: var(--primary-color);
    cursor: pointer;
    p {
      color: #ffffff;
    }
  }
`;

const ServicesCard = ({ icon, title }) => {
  return (
    <Card>
      <img src={icon} alt='' />
      <Title02>{title}</Title02>
    </Card>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
