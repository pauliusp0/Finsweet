import React from 'react';
import styled from 'styled-components';
import { Title02 } from '../Global.style';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: #ffffff;

  > p {
    /* Title 02 */
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    /* identical to box height, or 150% */
    text-align: center;
    letter-spacing: -0.03em;

    /* Black */
    color: var(--black-color);
  }

  svg {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  &:hover {
    background: var(--primary-color);
    p {
      color: #ffffff;
    }
  }
`;

const ServicesCard = ({ icon, title }) => {
  return (
    <Card>
      <Title02>{title}</Title02>
    </Card>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
