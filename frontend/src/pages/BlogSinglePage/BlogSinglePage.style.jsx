import styled from 'styled-components';
//  HEADER SECTION STYLE

export const HeaderSection = styled.section`
  > section {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div {
      margin: 0 auto;
      width: 896px;

      > P,
      H3 {
      }
      > h3 {
        width: 896px;
        height: 134px;
      }
    }
    > img {
      margin-top: 48px;
    }
  }
`;

export const ContentSection = styled.section`
  margin-top: 64px;
  > section {
    padding-bottom: 128px;

    > div {
      > img {
        margin: 56px 0 80px 0;
      }
      margin: 0 auto;
      width: 896px;
      > h4 {
        margin: 64px 0 20px 0;
      }
      > p {
        margin-bottom: 16px;
      }
      > div {
        display: flex;
        gap: 34px;
        align-items: center;
        margin: 24px 0 24px 0;
        > hr {
          background: #1e1b1b;
          width: 3.19px;
          height: 112px;
        }
      }
    }
  }
`;
