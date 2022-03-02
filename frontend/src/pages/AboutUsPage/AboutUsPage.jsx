import React from 'react';
import Button from '../../components/Buttons/Button';
import { Body01, Container, Title02 } from '../../components/Global.style';
import {
  ColorCard,
  ColorSection,
  HeaderLeft,
  HeaderRight,
  HeaderSection,
  StepsLeft,
  StepsRight,
  StepsSection,
} from './AboutUs.style';

// images
import mechanicImg from '../../assets/about-us-mechanic-img.png';
import stepsRightImg from '../../assets/Steps-right.png';
import colorSectionImg1 from '../../assets/color-section-1.png';
import colorSectionImg2 from '../../assets/color-section-2.png';

// components
import Step from '../../components/Step/Step';

const ServicesPage = () => {
  return (
    <main>
      {/* ========================= HEADER ============================= */}
      <HeaderSection>
        <Container>
          <HeaderLeft>
            <img src={mechanicImg} alt='' />
          </HeaderLeft>
          <HeaderRight>
            <h1>About us</h1>
            <Body01>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </Body01>
            <Button primary text='Book a service' />
          </HeaderRight>
        </Container>
      </HeaderSection>
      {/* ========================= STEPS SECTION ============================= */}
      <StepsSection>
        <Container>
          <StepsLeft>
            <h3>
              We Provide Expert Service and aim to have a long term with you
            </h3>
            <Title02>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter
            </Title02>
            <Step
              number='01'
              title='Get a Quote'
              body='Through True Rich Attended does no end it his mother since real'
              line
            />
            <Step
              number='02'
              title='Book an Appointment'
              body='Through True Rich Attended does no end it his mother since real had half every'
              line
            />
            <Step
              number='03'
              title='Get your Service Done'
              body='Through True Rich Attended does no end it his mother since real had half every'
            />
          </StepsLeft>
          <StepsRight>
            <img src={stepsRightImg} alt='' />
          </StepsRight>
        </Container>
      </StepsSection>
      {/* ================================= COLOR SECTION =========================== */}
      <ColorSection>
        <ColorCard>
          <img src={colorSectionImg1} alt='' />
          <div>
            <h4>Serve our customers and always deliver the customer service</h4>
            <Title02>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes{' '}
            </Title02>
          </div>
        </ColorCard>
        <ColorCard>
          <img src={colorSectionImg2} alt='' />
          <div>
            <h4>
              To be the world’s most eader in automotive business solutions.
            </h4>
            <Title02>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
            </Title02>
          </div>
        </ColorCard>
        <ColorCard>
          <img src={colorSectionImg2} alt='' />
          <div>
            <h4>
              We value the service we provide and our loyal returning customers
            </h4>
            <Title02>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
            </Title02>
          </div>
        </ColorCard>
      </ColorSection>
    </main>
  );
};

export default ServicesPage;
