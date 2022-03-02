import React from 'react';
import {
  Body02,
  Container,
  Title01,
  Title02,
} from '../../components/Global.style';
import {
  FeatureCard,
  FeaturesWrapper,
  ServiceLeft,
  ServiceRight,
  ServicesCards,
  ServiceSection,
  ServiceWrapper,
} from './ServiceSinglePage.style';

// icons
import wrenchIcon from '../../assets/wrench-icon.svg';
import mechanicIcon from '../../assets/mechanic-icon.svg';
import moneyIcon from '../../assets/money-icon.svg';
import engineRepairIcon from '../../assets/engine-repair-icon.svg';
import diagnosticsIcon from '../../assets/diagnostics-icon.svg';
import batteriesIcon from '../../assets/batteries-icon.svg';

// Images
import wheelImage from '../../assets/about-us-services.png';
import Banner from '../../components/Banner/Banner';

// logos

const ServiceSinglePage = () => {
  return (
    <>
      <ServiceSection>
        <Container>
          <h1>Auto Diagnostics</h1>
          <ServiceWrapper>
            <ServiceLeft>
              <ServicesCards>
                <Title01>Other services</Title01>
                <div>
                  <img src={engineRepairIcon} alt='' />
                  <Title02>Engine Repair</Title02>
                </div>
                <div>
                  <img src={diagnosticsIcon} alt='' />
                  <Title02>Car wash</Title02>
                </div>
                <div>
                  <img src={batteriesIcon} alt='' />
                  <Title02>Batteries</Title02>
                </div>
              </ServicesCards>
              <FeaturesWrapper>
                <FeatureCard>
                  <img src={wrenchIcon} alt='' />
                  <div>
                    <Title02>Convenient service</Title02>
                    <Body02>
                      Through True Rich Attended does no end it his mother since
                      real had half every him.
                    </Body02>
                  </div>
                </FeatureCard>
                <FeatureCard>
                  <img src={mechanicIcon} alt='' />
                  <div>
                    <Title02>Expert mechanics</Title02>
                    <Body02>
                      Through True Rich Attended does no end it his mother since
                      real had half every him.
                    </Body02>
                  </div>
                </FeatureCard>
                <FeatureCard>
                  <img src={moneyIcon} alt='' />
                  <div>
                    <Title02>Transparent pricing</Title02>
                    <Body02>
                      Through True Rich Attended does no end it his mother since
                      real had half every him.
                    </Body02>
                  </div>
                </FeatureCard>
              </FeaturesWrapper>
            </ServiceLeft>
            <ServiceRight>
              <img src={wheelImage} alt='' />
              <h4>
                The warning lights on your dashboard are the most obvious
                starting point.
              </h4>
              <Body02>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </Body02>
              <Body02>
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante. Maecenas sodales tristique quam. Suspendisse
                fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis
                leo varius laoreet sed mollis dui. Aenean placerat nec enim ut
                finibus. Maecenas suscipit nibh eu neque egestas, non
                condimentum mi bibendum. Sed est eros, molestie consectetur
                auctor non, lobortis quis tortor. Nam cursus imperdiet massa
                volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
                tincidunt. Etiam pellentesque metus vel enim iaculis aliquam.
                Mauris at nisi sed elit gravida malesuada.
              </Body02>
              <Title01>
                Delaying a diagnosis and repair could lead to even bigger
                problems down the road.
              </Title01>
              <Body02>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </Body02>
              <div>
                <hr />
                <Body02>
                  Ut non urna a odio condimentum dictum. Proin egestas erat a
                  orci ultrices, vitae bibendum libero posuere. Quisque laoreet
                  tincidunt justo. Vestibulum congue dictum libero finibus
                  vehicula. Aliquam nisi velit, ultricies eget enim vel,
                  venenatis mollis ante.
                </Body02>
              </div>
            </ServiceRight>
          </ServiceWrapper>
        </Container>
      </ServiceSection>
      <Banner />
    </>
  );
};

export default ServiceSinglePage;
