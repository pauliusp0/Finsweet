import React from 'react';
import {
  Body01,
  Body02,
  Container,
  Title01,
} from '../../components/Global.style';
import { ContentSection, HeaderSection } from './BlogSinglePage.style';

// images
import blogHeader from '../../assets/blog-single-page-header.png';
import BlogImage from '../../assets/blog-single-image-1.png';
import Banner from '../../components/Banner/Banner';

const BlogSinglePage = () => {
  return (
    <>
      <HeaderSection>
        <Container>
          <div>
            <Body02>Posted on October 6th 2021</Body02>
            <h3>Should I Buy a New Car or Lease a New Car in 2021?</h3>
            <Body02>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical{' '}
            </Body02>
          </div>
          <img src={blogHeader} alt='' />
        </Container>
      </HeaderSection>
      <ContentSection>
        <Container>
          <div>
            <h4>This is a blog post headline</h4>
            <Body02>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis. <br /> <br /> Ut non urna a odio condimentum dictum.
              Proin egestas erat a orci ultrices, vitae bibendum libero posuere.
              Quisque laoreet tincidunt justo. Vestibulum congue dictum libero
              finibus vehicula. Aliquam nisi velit, ultricies eget enim vel,
              venenatis mollis ante. Maecenas sodales tristique quam.
              Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut
              orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec
              enim ut finibus. Maecenas suscipit nibh eu neque egestas, non
              condimentum mi bibendum. Sed est eros, molestie consectetur auctor
              non, lobortis quis tortor. Nam cursus imperdiet massa volutpat
              hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt.
              Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi
              sed elit gravida malesuada.
            </Body02>
            <img src={BlogImage} alt='' />
            <Title01>This is a small blog post headline</Title01>
            <Body02>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </Body02>
            <div>
              <hr />
              <Body01>
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante.
              </Body01>
            </div>
            <Body02>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </Body02>
          </div>
        </Container>
      </ContentSection>
      <Banner />
    </>
  );
};

export default BlogSinglePage;
