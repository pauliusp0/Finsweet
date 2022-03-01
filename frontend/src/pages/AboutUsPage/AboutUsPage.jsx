import React from 'react';
import { Body01, Container } from '../../components/Global.style';
import { HeaderLeft, HeaderRight, HeaderSection } from './AboutUsPage.style';

// images
import mechanicImg from '../../assets/about-us-header.png';
import Button from '../../components/Buttons/Button';

const AboutUsPage = () => {
  return (
    <main>
      {/* ========================= HEADER ============================= */}
      <HeaderSection>
        <Container>
          <HeaderLeft>
            <img src={mechanicImg} alt='' />
          </HeaderLeft>
          <HeaderRight>
            <h1>Our services</h1>
            <Body01>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does{' '}
            </Body01>
            <Button primary text='Book a service' />
          </HeaderRight>
        </Container>
      </HeaderSection>
    </main>
  );
};

export default AboutUsPage;
