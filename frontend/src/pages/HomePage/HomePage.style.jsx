import styled from 'styled-components';

// HEADER  SECTION STYLE

export const HeaderSection = styled.section`
  padding: 80px 0 128px 0;

  > section {
    display: flex;
    height: 632px;
    align-content: center;
    align-items: center;
    gap: 51px;
  }
`;
export const HeaderLeft = styled.div`
  width: 624px;
  height: 452px;
  h1 {
    margin-bottom: 32px;
  }
  > div {
    margin-top: 48px;
    display: flex;
    width: 374.98px;
    height: 56px;
    align-items: center;
    p {
      opacity: 1;
    }
    img {
      width: 30.94px;
      height: 30.94px;
      margin-right: 13.05px;
    }
  }
`;

export const HeaderRight = styled.div`
  position: relative;
  img {
    width: 605px;
    height: 632px;
    object-fit: cover;
    object-position: center;
  }
`;

export const Service = styled.div`
  position: absolute;
  top: 81px;
  right: 353.36px;
  width: 282px;
  height: 102px;
  border: 12px solid rgba(225, 225, 225, 0.43);
  border-radius: 59px;
  box-sizing: content-box;

  > div {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 59px;
    box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
    border-radius: 59px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 14.41px;
    justify-content: center;
  }

  > div > div {
    width: 69.66px;
    height: 70px;
    background: var(--mint-color);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.99px;
    p {
      color: #ffffff;
      opacity: 1;
    }
  }
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 70px;
  left: 299px;
  width: 326px;
  height: 102px;
  border-radius: 59px;
  box-sizing: content-box;
  border: 12px solid rgba(225, 225, 225, 0.43);

  > div {
    background-color: #ffffff;
    box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
    border-radius: 59px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  > div > div:last-child {
    display: flex;
    /* gap: 1px; */
    img {
      width: 36px;
      height: 36px;
      padding: 3px;
    }
    > div {
      position: relative;
      width: 36px;
      height: 36px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      img:last-child {
        clip: rect(0px, 18px, 200px, 0px);
      }
    }
  }
`;

// QUOTE SECTION STYLE

export const QuoteSection = styled.section`
  background: #e2e6e9;
  height: 894px;
  > section {
    padding-top: 128px;
    display: flex;
    gap: 72px;
  }
`;

export const QuoteLeft = styled.div`
  width: 584px;
  height: 638px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  h2 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 16px;
  }
  > div:last-child {
    margin-left: 63px;
    display: flex;
    gap: 21px;
    align-items: center;
    p {
      opacity: 1;
    }
  }
`;
export const Feature = styled.div`
  width: 385px;
  height: 105px;
  display: flex;
  gap: 16px;
  img {
    width: 47px;
    height: 47px;
  }
`;

export const QuoteRight = styled.div`
  width: 625px;
  height: 562px;
`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  input {
    border: none;
    width: 624px;
    height: 72px;
    background: #ffffff;
    border-radius: 2px;
    padding: 23px 40px;
    ::placeholder {
      /* Body 02 */
      font-family: Manrope;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;

      /* or 175% */

      /* Black */
      color: #1e1b1b;

      opacity: 0.5;
    }
  }
  button {
    width: 208px;
    height: 64px;
    margin-top: 32px;
  }
`;

// PROCESS SECTION STYLE

export const ProcessSection = styled.section`
  height: 783px;
  > section {
    height: 527px;
    padding-top: 128px;
    display: flex;
    gap: 131px;
  }
`;

export const ProcessLeft = styled.div`
  width: 524px;
  height: 396px;
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 32px;
  }
`;

export const ProcessRight = styled.div`
  width: 432px;
  height: 527px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
