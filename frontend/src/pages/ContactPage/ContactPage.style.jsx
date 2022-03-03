import styled from 'styled-components';

// GET IN TOUCH SECTION STYLE

export const GetInTouchSection = styled.section`
  padding: 80px 0 476px 0;
  > section {
    display: flex;
    align-items: center;
    gap: 139px;
    > div > h1 {
      width: 507px;
      margin-bottom: 48px;
    }
  }
`;

export const GetInTouchLeft = styled.div``;
export const GetInTouchRight = styled.div`
  padding-top: 148px;
  > div {
    margin-bottom: 32px;
    > P {
      margin-bottom: 2px;
    }
  }
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
    background: var(--lightGray-color);
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

      opacity: 1.5;
    }
  }
  button {
    width: 208px;
    height: 64px;
    margin-top: 32px;
  }
`;

// MAP SECTION STYLE

export const MapSection = styled.section`
  position: absolute;
  top: 914px;
  right: 318px;
`;

export const Banner = styled.section`
  margin: 0;
  padding: 0;
  height: 448px;
  > img {
    height: 448px;
    width: 100%;
  }
`;
