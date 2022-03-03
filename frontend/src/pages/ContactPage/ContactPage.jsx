import React from 'react';
import Button from '../../components/Buttons/Button';
import { Body02, Container, Title02 } from '../../components/Global.style';
import {
  Banner,
  Form,
  GetInTouchLeft,
  GetInTouchRight,
  GetInTouchSection,
  MapSection,
} from './ContactPage.style';

import contactBanner from '../../assets/contact-banner.png';

const ContactPage = () => {
  return (
    <>
      <GetInTouchSection>
        <Container>
          <GetInTouchLeft>
            <h1>Get in touch with our experts</h1>
            <Form>
              <input type='text' placeholder='Your full Name' />
              <input type='text' placeholder='Your Email' />
              <input type='text' placeholder='Select service type' />
              <input type='text' placeholder='Message' />
              <Button primary text='Send message' />
            </Form>
          </GetInTouchLeft>
          <GetInTouchRight>
            <div>
              <Body02>Address</Body02>
              <Title02>NH 234 Public Square San Francisco 65368</Title02>
            </div>
            <div>
              <Body02>Contact Details</Body02>
              <Title02>
                1800 265 24 52 <br /> Finsweet@gmail.com
              </Title02>
            </div>
            <div>
              <Body02>Opening Hours</Body02>
              <Title02>Monday to Friday 9:00 AM to 10:00 AM</Title02>
            </div>
          </GetInTouchRight>
        </Container>
      </GetInTouchSection>
      {/* MAP */}
      <MapSection>
        <Container>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNiujorkas%2C%20Jungtin%C4%97s%20Valstijos!5e0!3m2!1slt!2slt!4v1646258206069!5m2!1slt!2slt'
            width='1280'
            height='512'
            style='border:0;'
            allowfullscreen=''
            loading='lazy'
            style={{ border: 0 }}
          ></iframe>
        </Container>
      </MapSection>
      {/* Banner */}
      <Banner>
        <img src={contactBanner} alt='' />
      </Banner>
    </>
  );
};

export default ContactPage;
