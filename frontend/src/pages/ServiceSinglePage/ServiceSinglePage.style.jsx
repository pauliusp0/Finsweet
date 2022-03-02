import styled from 'styled-components';

// SERVICE SINGLE PAGE STYLE

export const ServiceSection = styled.section`
  > section > h1 {
    padding-bottom: 96px;
  }
  padding-bottom: 136px;
`;

export const ServiceWrapper = styled.div`
  display: flex;
`;

export const ServiceLeft = styled.div``;

export const ServicesCards = styled.div`
  background: #f5f5f5;
  padding: 32px;

  > p {
    padding-bottom: 32px;
  }
  > img {
  }

  > div {
    background: #ffffff;
    width: 264px;
    height: 158px;
    text-align: center;
    padding-top: 32px;
    margin-bottom: 26px;
    > p {
      padding-top: 16px;
    }
  }
`;

export const FeaturesWrapper = styled.div`
  width: 330px;
  height: 458px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FeatureCard = styled.div`
  display: flex;
  > img {
    margin-right: 16px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const ServiceRight = styled.div`
  margin-left: 96px;
  > img {
    width: 854px;
    height: 334px;
  }
  > h4 {
    margin: 46px 0 24px 0;
  }
  > p:first-of-type {
    margin-bottom: 40px;
  }
  > p:nth-of-type(3) {
    margin: 68px 0 24px 0;
  }
  > div {
    margin-top: 32px;
    display: flex;
    gap: 32px;
    align-items: center;
    > p {
    }
    > hr {
      width: 3.04px;
      height: 112px;

      background: #1e1b1b;
    }
  }
`;
