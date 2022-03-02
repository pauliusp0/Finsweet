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

// STEPS SECTION STYLE

export const StepsSection = styled.section`
  padding-bottom: 128px;
  > section {
    display: flex;
    justify-content: space-between;
  }
`;

export const StepsLeft = styled.div`
  > h3 {
    width: 620px;
    margin-bottom: 16px;
  }
  > p {
    width: 614px;
    opacity: 0.6;
    margin-bottom: 48px;
  }
`;

export const StepsRight = styled.div`
  width: 573px;
  height: 773px;
`;

//  COLOR SECTION STYLE

export const ColorSection = styled.section`
  height: 629px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  overflow: hidden;

  > div:first-child {
    background: rgba(248, 91, 41, 0.9);
  }
  > div:nth-child(2) {
    background: rgba(0, 0, 0, 0.9);
  }
  > div:nth-child(3) {
    background: rgba(116, 67, 202, 0.9);
  }
`;

export const ColorCard = styled.div`
  height: 629px;

  img {
    position: absolute;
    z-index: -1;
  }

  > div {
    display: flex;
    gap: 32px;
    flex-direction: column;
    padding: 142px 102px;

    > p {
      opacity: 0.7;
    }

    > p,
    h4 {
      color: white;
    }
  }
`;

//  FEATURES SECTION STYLE

export const FeatureSection = styled.section`
  padding: 80px 0 128px 0;
  background: #f8f8f8;
  > section {
    > h2 {
      width: 861px;
      margin: 0 auto;
      text-align: center;
    }
    > section {
      background: transparent;
      padding-top: 16px;
    }
  }
`;

export const FeatureBlock = styled.div`
  height: 424px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  margin-top: 64px;
  display: flex;

  > hr {
    height: 424px;
    border: 2px solid #f2f2f2;
  }

  /* DE */
  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    /* width: 295px; */
    padding: 88px 66px;

    > img {
      width: 64px;
      margin: 0 auto;
      /* margin-bottom: 24px; */
    }
    > p:first-of-type {
      margin: 24px 0px 16px 0px;
    }
  }
`;
