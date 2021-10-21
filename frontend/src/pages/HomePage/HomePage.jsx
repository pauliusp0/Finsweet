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
  Header,
  HeaderLeft,
  HeaderRight,
  Rating,
  Service,
} from './HomePage.style';

// icons
import clockIcon from '../../assets/clock-icon.svg';
import fullStar from '../../assets/full-star.svg';
import emptyStar from '../../assets/empty-star.svg';

// components
import Button from '../../components/Buttons/Button';

const HomePage = () => {
  return (
    <main>
      <Header>
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
      </Header>
    </main>
  );
};

export default HomePage;
