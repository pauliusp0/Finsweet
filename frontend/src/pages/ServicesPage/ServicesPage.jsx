import React from 'react';

// Style
import { Body01, Container, Title02 } from '../../components/Global.style';
import {
  HeaderLeft,
  HeaderRight,
  HeaderSection,
  How1Left,
  How1Right,
  How1Section,
  How2Section,
  How2SectionLeft,
  How2SectionRight,
  ServicesLeft,
  ServicesRight,
  ServicesSection,
} from './Services.style';

// images
import mechanicImg from '../../assets/about-us-header.png';
import servicesImg from '../../assets/about-us-services.png';
import checkMark from '../../assets/Checkmark.png';
import aboutYouHow1first from '../../assets/about-us-how-to1-1.png';
import aboutYouHow1second from '../../assets/about-us-how-to1-2.png';
import aboutYouHow2first from '../../assets/about-us-how-to2-1.png';
import aboutYouHow2second from '../../assets/about-us-how-to2-2.png';

// Components
import Button from '../../components/Buttons/Button';
import ServicesCard from '../../components/ServiceCard/ServiceCard';
import Arrow from '../../components/Arrow/Arrow';

// Icons
import engineRepairIcon from '../../assets/engine-repair-icon.svg';
import diagnosticsIcon from '../../assets/diagnostics-icon.svg';
import bodyWorkIcon from '../../assets/body-work-icon.svg';
import batteriesIcon from '../../assets/batteries-icon.svg';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';

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
      {/* ========================= SERVICES =+++++++++++++++++++++++++++++++ */}
      <ServicesSection>
        <Container>
          <ServicesLeft>
            <img src={servicesImg} alt='' />
            <div>
              <h3>Auto Diagnostics</h3>
              <Title02>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic. Through True Rich Attended does no end it his
                mother.{' '}
              </Title02>
              <Link to='/services/auto-diagnostics'>
                <Arrow text='See service details' />
              </Link>
            </div>
          </ServicesLeft>
          <ServicesRight>
            <Link to='/services/auto-diagnostics'>
              <ServicesCard title='Auto Dignostics' icon={diagnosticsIcon} />
            </Link>

            <ServicesCard title='Engine Repair' icon={engineRepairIcon} />
            <ServicesCard icon={bodyWorkIcon} title='Body Work' />
            <ServicesCard icon={batteriesIcon} title='Batteries' />
            <ServicesCard icon={diagnosticsIcon} title='Car Wash' />
            <ServicesCard icon={engineRepairIcon} title='AC Repair' />
          </ServicesRight>
        </Container>
      </ServicesSection>
      {/* ========================= HOW 1 SECTION =+++++++++++++++++++++++++++++++ */}
      <How1Section>
        <Container>
          <How1Left>
            <h3>How we work and the process we follow</h3>
            <div>
              <img src={checkMark} alt='' />
              <Title02>
                Through True Rich Attended does no end it his mother since
              </Title02>
            </div>
            <div>
              <img src={checkMark} alt='' />
              <Title02>
                Attended does no end it his mother since real had half every
              </Title02>
            </div>
            <div>
              <img src={checkMark} alt='' />
              <Title02>
                Since real had half every him case in packages enquire we up
                ecstatic
              </Title02>
            </div>
          </How1Left>
          <How1Right>
            <img src={aboutYouHow1first} alt='' />
            <img src={aboutYouHow1second} alt='' />
          </How1Right>
        </Container>
      </How1Section>
      {/* ========================= HOW 2 SECTION =+++++++++++++++++++++++++++++++ */}
      <How2Section>
        <Container>
          <How2SectionLeft>
            <img src={aboutYouHow2first} alt='' />
            <img src={aboutYouHow2second} alt='' />
          </How2SectionLeft>
          <How2SectionRight>
            <h3>Diagnose Car Problems If You Don’t Know Much About Cars</h3>
            <Body01>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
              everything from struts, shocks, and tie rod ends to ball joints,
              springs everything from struts, shocks, and tie rod ends to ball
              joints, springs
            </Body01>
            <Button primary text='Book a service' />
          </How2SectionRight>
        </Container>
      </How2Section>
      {/* ========================= Banner = ============================== */}
      <Banner />
    </main>
  );
};

export default AboutUsPage;
