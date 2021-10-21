import React from 'react';

// styles
import {
  Body01,
  Body02,
  Caption,
  Container,
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

// components
import Button from '../../components/Buttons/Button';
import Step from '../../components/Step/Step';
import ServicesCard from '../../components/ServiceCard/ServiceCard';

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

            <img
              src='https://s3-alpha-sig.figma.com/img/9553/8f5b/14830d8e85a1f1a83f2f3898d84e44ce?Expires=1635724800&Signature=FSBn8Jau2B4N3IbZ47scZ9Kffet~tAoU8g~taG04PzxbbxS52LcjZurpNsa7l9sMZnd202nMF7sKC7v-spYLqZNHJ9jeTiR7b3WzDmKiHwBBIAEuWA0rn~~aH95Cknp7-oBRyrTPyVXe6m3m4n4P2UFJXiG4K-qsXJ3UOsGI0E0rpTmz3RauYE6VzW5~3kaC2mnMSry0ay9idlSwu-MJL6X5DconQlrfjdf5oeoh2RJ8YXYXSGZSnDq4btAUMiBk3vQHpZ1zPghd29yI2x8TXdPz-KzeQktHZT052BkYB02lR6GRYCmijE6Nqngt6Bqp8PEm3qosvCtOHTyFkRtiMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt=''
            />
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
    </main>
  );
};

export default HomePage;
