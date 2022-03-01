import styled from 'styled-components';

// HEADER SECTION STYLE

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
