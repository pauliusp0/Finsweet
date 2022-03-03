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
