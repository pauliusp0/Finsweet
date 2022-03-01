import styled from 'styled-components';

//  HEADER SECTION STYLE

export const HeaderSection = styled.section`
  padding: 80px 0 128px 0;
  > section {
    display: flex;
    position: relative;
    height: 550px;
  }
`;

export const HeaderLeft = styled.div`
  > img {
    z-index: -1;
    position: absolute;
    width: 818px;
  }
`;

export const HeaderRight = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;
  background: #1e1b1b;
  width: 733px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 96px;
  h1,
  p {
    color: white;
  }
  h1 {
    margin-bottom: 16px;
  }
  button {
    margin-top: 48px;
    width: 203px;
  }
`;

// SERVICES SECTION STYLE

export const ServicesSection = styled.section`
  padding: 80px 0 128px 0;
  background: #f5f5f5;
  height: 1016px;
  > section {
    display: flex;
    gap: 32px;
  }
`;

export const ServicesLeft = styled.div`
  width: 624px;
  height: 760px;
  background-color: #ffffff;
  padding: 64px 48px;

  > div > p {
    opacity: 0.6;
    margin: 16px 0px 32px 0px;
  }
  > div > h3 {
    margin-top: 28px;
  }
`;

export const ServicesRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 50%;
`;

// HOW 1 SECTION STYLE

export const How1Section = styled.section`
  padding: 80px 0 128px 0;
  > section {
    display: flex;
  }
`;

export const How1Left = styled.div`
  width: 50%;

  h3 {
    width: 489px;
    margin-bottom: 53px;
  }
  > div {
    display: flex;
    gap: 24px;
    margin-bottom: 37px;
    > p {
      width: 443px;
    }
    > img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const How1Right = styled.div`
  width: 50%;
  display: flex;
  gap: 16px;
`;

// HOW 2 SECTION STYLE

export const How2Section = styled.section`
  padding-bottom: 128px;
  > section {
    display: flex;
    gap: 88px;
  }
`;

export const How2SectionLeft = styled.div`
  display: flex;
  gap: 16px;
`;

export const How2SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  > p {
    width: 512px;
  }
  > button {
    width: 203px;
  }
`;
