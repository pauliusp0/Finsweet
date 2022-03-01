import React from 'react';

// Style
import { Body01, Container, Title02 } from '../../components/Global.style';
import {
  HeaderLeft,
  HeaderRight,
  HeaderSection,
  ServicesLeft,
  ServicesRight,
  ServicesSection,
} from './AboutUsPage.style';

// images
import mechanicImg from '../../assets/about-us-header.png';
import servicesImg from '../../assets/about-us-services.png';

// Components
import Button from '../../components/Buttons/Button';
import ServicesCard from '../../components/ServiceCard/ServiceCard';

// Icons
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
import { engine } from 'express/lib/application';
import Arrow from '../../components/Arrow/Arrow';

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
              <Arrow text='See service details' />
            </div>
          </ServicesLeft>
          <ServicesRight>
            <ServicesCard title='Auto Dignostics' icon={diagnosticsIcon} />
            <ServicesCard title='Engine Repair' icon={engineRepairIcon} />
            <ServicesCard icon={bodyWorkIcon} title='Body Work' />
            <ServicesCard icon={batteriesIcon} title='Batteries' />
            <ServicesCard icon={diagnosticsIcon} title='Car Wash' />
            <ServicesCard icon={engineRepairIcon} title='AC Repair' />
          </ServicesRight>
        </Container>
      </ServicesSection>
    </main>
  );
};

export default AboutUsPage;
