import React from 'react';
import {
  BlogFourLeft,
  BlogFourRight,
  BlogFourSection,
  BlogFullSection,
  HeaderLeft,
  HeaderRight,
  HeaderSection,
} from './BlogPage.style';
import {
  Body01,
  Body02,
  Container,
  Title01,
  Title02,
} from '../../components/Global.style';

// images
import blogHeaderImg from '../../assets/blog-header-img.png';
import BlogImage2 from '../../assets/blog-image-2.png';
import BlogImage3 from '../../assets/blog-image-3.png';
import BlogImage4 from '../../assets/blog-image-4.png';
import BlogImage5 from '../../assets/blog-image-5.png';
import BlogFullImage1 from '../../assets/blog-full-image-1.png';
import BlogFullImage2 from '../../assets/blog-full-image-2.png';
import BlogFullImage3 from '../../assets/blog-full-image-3.png';
import BlogFullImage4 from '../../assets/blog-full-image-4.png';
import BlogFullImage5 from '../../assets/blog-full-image-5.png';
import BlogFullImage6 from '../../assets/blog-full-image-6.png';

// components
import Button from '../../components/Buttons/Button';
import Arrow from '../../components/Arrow/Arrow';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <>
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
      <BlogFourSection>
        <Container>
          <BlogFourLeft>
            <img src={BlogImage2} alt='' />
            <Body02>Posted on October 6th 2021</Body02>
            <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </Body02>
            <Link to='/blog/1'>
              <Arrow text='Read more' />
            </Link>
          </BlogFourLeft>
          <BlogFourRight>
            <div>
              <img src={BlogImage3} alt='' />
              <div>
                <Title01>Get an Awesome Number Plate for Your New Car</Title01>
                <Body02>Posted on October 6th 2021</Body02>
              </div>
            </div>
            <div>
              <img src={BlogImage4} alt='' />
              <div>
                <Title01>
                  Would you Let a Robot Drive your Car? Our AI Future
                </Title01>
                <Body02>Posted on October 6th 2021</Body02>
              </div>
            </div>
            <div>
              <img src={BlogImage5} alt='' />
              <div>
                <Title01>Will Electric Technology Soon Rule The Road?</Title01>
                <Body02>Posted on October 6th 2021</Body02>
              </div>
            </div>
          </BlogFourRight>
        </Container>
      </BlogFourSection>
      <BlogFullSection>
        <Container>
          <div>
            <img src={BlogFullImage1} alt='' />
            <Body02>Posted on October 6th 2021s</Body02>
            <Title01>
              5 Genius Car Accessories You Should Never Drive Without
            </Title01>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </Body02>
          </div>
          <div>
            <img src={BlogFullImage2} alt='' />
            <Body02>Posted on October 6th 2021s</Body02>
            <Title01>
              5 Genius Car Accessories You Should Never Drive Without
            </Title01>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </Body02>
          </div>
          <div>
            <img src={BlogFullImage3} alt='' />
            <Body02>
              We provide blow straight past it with the wheels skidding
            </Body02>
            <Title01>
              5 Genius Car Accessories You Should Never Drive Without
            </Title01>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </Body02>
          </div>
          <div>
            <img src={BlogFullImage4} alt='' />
            <Body02>
              We provide blow straight past it with the wheels skidding
            </Body02>
            <Title01>
              5 Genius Car Accessories You Should Never Drive Without
            </Title01>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </Body02>
          </div>
          <div>
            <img src={BlogFullImage5} alt='' />
            <Body02>
              5 Genius Car Accessories You Should Never Drive Without
            </Body02>
            <Title01>
              5 Genius Car Accessories You Should Never Drive Without
            </Title01>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </Body02>
          </div>
          <div>
            <img src={BlogFullImage6} alt='' />
            <Body02>
              5 Genius Car Accessories You Should Never Drive Without
            </Body02>
            <Title01>
              5 Genius Car Accessories You Should Never Drive Without
            </Title01>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </Body02>
          </div>
        </Container>
      </BlogFullSection>
      <Banner />
    </>
  );
};

export default BlogPage;
