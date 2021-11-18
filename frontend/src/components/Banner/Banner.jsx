import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button';

// images
import bannerImg1 from '../../assets/banner-img1.png';
import bannerImg2 from '../../assets/banner-img2.png';

const StyledBanner = styled.section`
  height: 502px;
  width: 100%;
  position: relative;
  display: flex;

  > div {
    width: 729px;
    height: 100%;
    position: absolute;
    left: 318px;
    top: 0px;
    background: var(--primary-color);
    padding: 128px 80px 240px 80px;
  }

  h3 {
    color: #ffffff;
  }
  button {
    margin-top: 48px;
  }
`;

const Image1 = styled.img`
  width: 976px;
  height: 502px;
  object-fit: cover;
  object-position: center;
`;

const Image2 = styled.img`
  width: 944px;
  height: 502px;
  object-fit: cover;
  object-position: center;
  margin-left: 100px;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <h3>Get in touch with us for your service related query</h3>
        <Button secondary text='Contact us' />
      </div>
      <Image1 src={bannerImg1} />
      <Image2 src={bannerImg2} />
    </StyledBanner>
  );
};

export default Banner;
