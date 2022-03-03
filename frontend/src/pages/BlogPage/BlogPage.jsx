import React from 'react';
import { HeaderLeft, HeaderRight, HeaderSection } from './BlogPage.style';
import { Body01, Container, Title02 } from '../../components/Global.style';

// images
import blogHeaderImg from '../../assets/blog-header-img.png';
import Button from '../../components/Buttons/Button';

const BlogPage = () => {
  return (
    <HeaderSection>
      <HeaderLeft>
        <img src={blogHeaderImg} alt='' />
        <div>
          <h1>Our Blog</h1>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <div>
          <p>TRENDING</p>
          <h4>Diagnose Car Problems If You Dont Know Much About Cars</h4>
          <Body01>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </Body01>
          <div>
            <Button primary text='Read more' />
            <Body01>Posted on October 6th 2021</Body01>
          </div>
        </div>
      </HeaderRight>
    </HeaderSection>
  );
};

export default BlogPage;
