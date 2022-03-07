import styled from 'styled-components';

// HEADER SECTION STYLE

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  position: relative;
  > img {
    position: absolute;
    z-index: -1;
  }
  > div {
    top: 0;
    left: 0;

    position: absolute;
    padding: 269px 290px;
    > h1 {
      color: white;
      width: 287px;
    }
  }
`;

export const HeaderRight = styled.div`
  background: #1e1b1b;
  mix-blend-mode: normal;
  opacity: 0.99;
  right: 0;
  width: 1053px;
  height: 624px;
  padding: 128px 64px;
  > div {
    width: 614px;
    > p:first-of-type {
      color: var(--primary-color);
    }
    > p,
    h4 {
      color: white;
      margin-bottom: 16px;
    }
    > div {
      display: flex;
      gap: 32px;
      align-items: center;
      margin-top: 48px;
      > p {
        color: white;
      }
    }
  }
`;

// BLOG FOUR SECTION STYLE

export const BlogFourSection = styled.section`
  padding: 128px 0;
  background: #f5f5f5;
  > section {
    display: flex;
    gap: 32px;
    align-items: center;
  }
`;

export const BlogFourLeft = styled.div`
  width: 537px;
  height: 746px;
  background: #ffffff;
  > img {
    width: 473px;
    height: 330px;
    padding-bottom: 16px;
  }
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > div {
    margin-top: 16px;
  }
`;
export const BlogFourRight = styled.div`
  width: 694.56px;
  height: 640px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  > div {
    display: flex;
    gap: 24px;
  }
  > img {
    width: 192px;
    height: 192px;
  }
`;

// BLOG FULL SECTION STYLE

export const BlogFullSection = styled.section`
  padding: 128px 0;
  > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px 11px;
    > div {
      width: 405px;
      height: 606px;
      > img {
        width: 405px;
        height: 266px;
      }
    }
  }
`;
