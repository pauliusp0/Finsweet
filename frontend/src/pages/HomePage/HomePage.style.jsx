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

// OFFER SECTION

export const OfferSection = styled.section`
  height: 1052px;
  background: var(--lightGray-color);
  > section {
    padding-top: 128px;
    h2 {
      width: 858px;
      height: 152px;
      margin-top: 8px;
    }
    > div {
      text-align: center;
      width: 858px;
      margin: 0 auto;
    }
    > div:last-child {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      width: 100%;
      margin-top: 64px;
    }
  }
`;

// Experience section
export const ExperienceSection = styled.section`
  height: 210px;
  background-color: var(--lightgray-color);

  h2 {
    color: var(--secondary-color);
  }
  > section {
    display: flex;
    justify-content: space-between;
    padding-top: 48px;
  }
`;

// Brands section
export const BrandsSection = styled.section`
  height: 611px;
  background: #fafafa;
  > section {
    padding-top: 128px;
  }
  h3 {
    text-align: center;
    margin-bottom: 41px;
  }
  > section > div {
    display: flex;
    flex-wrap: wrap;
    gap: 39px;
  }
`;

// Testimonial section
export const TestimonialSection = styled.section`
  height: 938px;
  background-color: var(--lightgray-color);
  padding-top: 128px;

  h3 {
    width: 909px;
    height: 134px;
    text-align: center;
    margin: 0 auto;
  }
`;

export const TestimonialCardsWrapper = styled.div`
  display: flex;
  padding-top: 94px;
  gap: 48px;
`;

export const CardsNavigationWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-left: 558px;
`;

export const Lines = styled.div`
  display: flex;
  gap: 15px;

  > div:first-child {
    width: 32px;
    height: 0px;

    /* Grey */
    outline: 4px solid red;
    box-sizing: border-box;
    outline-offset: -2px;
  }

  > div {
    width: 32px;
    height: 0px;

    /* Grey */
    outline: 4px solid #939191;
    box-sizing: border-box;
    outline-offset: -2px;
  }
`;

export const TestimonialNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  > div:first-child {
    width: 48px;
    height: 48px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  > div:last-child {
    width: 62px;
    height: 62px;

    /* Black */
    background: #1e1b1b;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

// Faq section
export const FaqSection = styled.section`
  /* height: 1140px; */
  background-color: var(--steelGray-color);
  padding: 128px;
  h3 {
    text-align: center;
    margin: 0 auto;
  }
`;

export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;
  gap: 12px;
`;

export const FaqCard = styled.div`
  width: 896px;
  background: #ffffff;
  padding: 38px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > p {
    width: 701.26px;
    padding-top: 10px;
  }
`;

export const FaqQuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    height: 36px;
  }
`;

export const FaqToggler = styled.div`
  width: 51.08px;
  height: 48px;
  background-color: var(--primary-color);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  > div > hr:first-child {
    position: absolute;
    border: 2px solid #ffffff;
    width: 17.03px;
    height: 0px;
  }
  > div > hr:nth-child(2) {
    position: absolute;
    border: 2px solid #ffffff;
    width: 17.03px;
    height: 0px;
    transform: rotate(-90deg);
  }
`;
