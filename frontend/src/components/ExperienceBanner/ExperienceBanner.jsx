import React from 'react';
import { Container, Title02 } from '../Global.style';
import styled from 'styled-components';

// Experience section
export const ExperienceSection = styled.section`
  height: 210px;
  background-color: var(--lightGray-color);

  h2 {
    color: var(--secondary-color);
  }
  > section {
    display: flex;
    justify-content: space-between;
    padding-top: 48px;
  }
`;

const ExperienceBanner = () => {
  return (
    <ExperienceSection>
      <Container>
        <div>
          <h2>20+</h2>
          <Title02>Professional</Title02>
        </div>
        <div>
          <h2>10+</h2>
          <Title02>Years Experience</Title02>
        </div>
        <div>
          <h2>12K+</h2>
          <Title02>Service Closed</Title02>
        </div>
        <div>
          <h2>100%</h2>
          <Title02>Customer Satisfaction</Title02>
        </div>
      </Container>
    </ExperienceSection>
  );
};

export default ExperienceBanner;
