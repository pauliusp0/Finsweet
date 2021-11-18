import React, { useState } from 'react';

// styles
import {
  Body01,
  Body02,
  Caption,
  Container,
  Title01,
  Title02,
} from '../../components/Global.style';
import {
  Feature,
  Form,
  HeaderSection,
  HeaderLeft,
  HeaderRight,
  QuoteSection,
  QuoteLeft,
  QuoteRight,
  Rating,
  Service,
  ProcessSection,
  ProcessLeft,
  ProcessRight,
  OfferSection,
  ExperienceSection,
  BrandsSection,
  TestimonialSection,
  Lines,
  TestimonialCardsWrapper,
  CardsNavigationWrapper,
  TestimonialNavigation,
} from './HomePage.style';

// icons
import clockIcon from '../../assets/clock-icon.svg';
import fullStar from '../../assets/full-star.svg';
import emptyStar from '../../assets/empty-star.svg';
import wrenchIcon from '../../assets/wrench-icon.svg';
import mechanicIcon from '../../assets/mechanic-icon.svg';
import moneyIcon from '../../assets/money-icon.svg';
import arrow from '../../assets/arrow.svg';
import wheelRepairIcon from '../../assets/wheel-repair-icon.svg';
import oilFilterIcon from '../../assets/oil-filter-icon.svg';
import insuranceIcon from '../../assets/insurance-icon.svg';
import engineRepairIcon from '../../assets/engine-repair-icon.svg';
import diagnosticsIcon from '../../assets/diagnostics-icon.svg';
import customServiceIcon from '../../assets/custom-service-icon.svg';
import bodyWorkIcon from '../../assets/body-work-icon.svg';
import batteriesIcon from '../../assets/batteries-icon.svg';
import testimonialArrowLg from '../../assets/testimonial-arrow-lg.svg';
import testimonialArrowSl from '../../assets/testimonial-arrow-sl.svg';

// logos
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';

// Images
import mechanicImg from '../../assets/mechanic-header-img.png';

// components
import Button from '../../components/Buttons/Button';
import Step from '../../components/Step/Step';
import ServicesCard from '../../components/ServiceCard/ServiceCard';
import Banner from '../../components/Banner/Banner';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Carousel from '../../components/Carousel';

const HomePage = () => {
  return (
    <main>
      <HeaderSection>
        <Container>
          <HeaderLeft>
            <h1>Get your vehicle service done online at one place</h1>
            <Button primary text='Book a service' />
            <div>
              <img src={clockIcon} alt='' />
              <div>
                <Caption>We are open </Caption>
                <Body01>Monday to Friday 9:00 AM to 10:00 AM</Body01>
              </div>
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Service>
              <div>
                <Title02>Quick service</Title02>
                <div>
                  <Title02>24</Title02>
                  <Body02>hr</Body02>
                </div>
              </div>
            </Service>
            <Rating>
              <div>
                <div>
                  <Title02>4.5/5</Title02>
                  <Caption>Rating</Caption>
                </div>
                <div>
                  <img src={fullStar} alt='' />
                  <img src={fullStar} alt='' />
                  <img src={fullStar} alt='' />
                  <img src={fullStar} alt='' />
                  <div>
                    <img src={emptyStar} alt='' />
                    <img src={fullStar} alt='' />
                  </div>
                </div>
              </div>
            </Rating>
            <img src={mechanicImg} alt='' />
          </HeaderRight>
        </Container>
      </HeaderSection>
      <QuoteSection>
        <Container>
          <QuoteLeft>
            <h2>We are taking car servicing seriously</h2>
            <Feature>
              <img src={wrenchIcon} alt='' />
              <div>
                <Title02>Convenient service</Title02>
                <Body02>
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </Body02>
              </div>
            </Feature>
            <Feature>
              <img src={mechanicIcon} alt='' />
              <div>
                <Title02>Convenient service</Title02>
                <Body02>
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </Body02>
              </div>
            </Feature>
            <Feature>
              <img src={moneyIcon} alt='' />
              <div>
                <Title02>Convenient service</Title02>
                <Body02>
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </Body02>
              </div>
            </Feature>
            <div>
              <Body01>Know more about us</Body01>
              <img src={arrow} alt='' />
            </div>
          </QuoteLeft>
          <QuoteRight>
            <h3>Get a quote for the car service</h3>
            <Form>
              <input type='text' placeholder='Enter your location' />
              <input type='text' placeholder='Enter your location' />
              <input type='text' placeholder='Enter your location' />
              <input type='text' placeholder='Enter your number' />
              <Button primary text='Get your quote' />
            </Form>
          </QuoteRight>
        </Container>
      </QuoteSection>
      <ProcessSection>
        <Container>
          <ProcessLeft>
            <h2>We follow a clear process to help you out.</h2>
            <Body02>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire
            </Body02>
            <Button primary text='Learn more' />
          </ProcessLeft>
          <ProcessRight>
            <Step
              title='Get a Quote'
              body='Through True Rich Attended does no end it his mother since real had half every.'
              number='01'
              line
            />
            <Step
              title='Book an Appointment'
              body='Through True Rich Attended does no end it his mother since real had half every.'
              number='02'
              line
            />
            <Step
              title='Get your Service Done'
              body='Through True Rich Attended does no end it his mother since real had half every.'
              number='03'
            />
          </ProcessRight>
        </Container>
      </ProcessSection>
      <OfferSection>
        <Container>
          <div>
            <Title02>What we Offer</Title02>
            <h2>We offer full service auto repair & maintenance</h2>
          </div>
          <div>
            <ServicesCard title='Diagnostics' icon={diagnosticsIcon} />
            <ServicesCard title='Engine Repair' icon={engineRepairIcon} />
            <ServicesCard title='Wheel Repair' icon={wheelRepairIcon} />
            <ServicesCard title='Oil Filter' icon={oilFilterIcon} />
            <ServicesCard title='Body Work' icon={bodyWorkIcon} />
            <ServicesCard title='Batteries' icon={batteriesIcon} />
            <ServicesCard title='Insurance Claim' icon={insuranceIcon} />
            <ServicesCard title='Custom Service' icon={customServiceIcon} />
          </div>
        </Container>
      </OfferSection>
      <Banner />
      <ExperienceSection>
        <Container>
          <div>
            <h2>20+</h2>
            <Title02>Professional</Title02>
          </div>
          <div>
            <h2>10+</h2>
            <Title02>Years Experience</Title02>
          </div>
          <div>
            <h2>12K+</h2>
            <Title02>Service Closed</Title02>
          </div>
          <div>
            <h2>100%</h2>
            <Title02>Customer Satisfaction</Title02>
          </div>
        </Container>
      </ExperienceSection>
      <BrandsSection>
        <Container>
          <h3>Brands we Serve</h3>
          <div>
            <img src={logo1} alt='' />
            <img src={logo2} alt='' />
            <img src={logo3} alt='' />
            <img src={logo4} alt='' />
            <img src={logo5} alt='' />
            <img src={logo1} alt='' />
            <img src={logo2} alt='' />
            <img src={logo3} alt='' />
            <img src={logo4} alt='' />
            <img src={logo5} alt='' />
          </div>
        </Container>
      </BrandsSection>
      <TestimonialSection>
        <Container>
          <h3>Our customers say the nicest things about our service</h3>
          <Carousel
            render={(
              slide,
              paginatedPosts,
              NextSlide,
              PreviousSlide,
              firstLineRef,
              secondLineRef,
              thirdLineRef,
              fourthLineRef
            ) => (
              <>
                <TestimonialCardsWrapper>
                  {paginatedPosts[slide].map((info, index) => (
                    <TestimonialCard info={info} />
                  ))}
                </TestimonialCardsWrapper>
                <CardsNavigationWrapper>
                  <Lines>
                    <div ref={firstLineRef}></div>
                    <div ref={secondLineRef}></div>
                    <div ref={thirdLineRef}></div>
                    <div ref={fourthLineRef}></div>
                  </Lines>
                  <TestimonialNavigation>
                    <div onClick={PreviousSlide}>
                      <img src={testimonialArrowSl} alt='' />
                    </div>
                    <div onClick={NextSlide}>
                      <img src={testimonialArrowLg} alt='' />
                    </div>
                  </TestimonialNavigation>
                </CardsNavigationWrapper>
              </>
            )}
          />
        </Container>
      </TestimonialSection>
    </main>
  );
};

export default HomePage;
