import styled from 'styled-components';

export const Header = styled.section`
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
  img {
    width: 605px;
    height: 632px;
    object-fit: cover;
    object-position: center;
  }
`;
