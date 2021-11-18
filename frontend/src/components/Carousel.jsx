import React, { useRef, useState } from 'react';

import testimonialImg1 from '../assets/testimonial-img1.jpg';
import testimonialImg2 from '../assets/testimonial-img2.jpg';
import usePaginated from '../hooks/usePaginated';

const Carousel = ({ render }) => {
  // testimonial carousel cards
  let posts = [
    {
      logo: testimonialImg1,
      name: 'Jonathan Vallem',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg1,
      name: 'Jonathan Vallem',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg2,
      name: 'Smith Johnson',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg2,
      name: 'Smith Johnson',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg1,
      name: 'Jonathan Vallem',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg1,
      name: 'Jonathan Vallem',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg2,
      name: 'Smith Johnson',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
    {
      logo: testimonialImg2,
      name: 'Smith Johnson',
      location: 'New york',
      description:
        'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
    },
  ];
  // -- state
  const [slide, setSlide] = useState(0);
  const [paginatedPosts, setpaginatedPosts] = useState(usePaginated(posts, 2));
  // -- refs
  const firstLineRef = useRef();
  const secondLineRef = useRef();
  const thirdLineRef = useRef();
  const fourthLineRef = useRef();

  const NextSlide = () => {
    switch (slide) {
      case 0:
        return (
          setSlide(slide + 1),
          (firstLineRef.current.style.outline = '4px solid #939191'),
          (secondLineRef.current.style.outline = '4px solid red')
        );

      case 1:
        return (
          setSlide(slide + 1),
          (secondLineRef.current.style.outline = '4px solid #939191'),
          (thirdLineRef.current.style.outline = '4px solid red')
        );
      case 2:
        return (
          setSlide(slide + 1),
          (thirdLineRef.current.style.outline = '4px solid #939191'),
          (fourthLineRef.current.style.outline = '4px solid red')
        );
      case 3:
        return;

      default:
        break;
    }
  };

  const PreviousSlide = () => {
    console.log(slide);
    switch (slide) {
      case 0:
        return (
          (secondLineRef.current.style.outline = '4px solid #939191'),
          (firstLineRef.current.style.outline = '4px solid red')
        );
      case 1:
        return (
          setSlide(slide - 1),
          (secondLineRef.current.style.outline = '4px solid #939191'),
          (firstLineRef.current.style.outline = '4px solid red')
        );

      case 2:
        return (
          setSlide(slide - 1),
          (thirdLineRef.current.style.outline = '4px solid #939191'),
          (secondLineRef.current.style.outline = '4px solid red')
        );

      case 3:
        return (
          setSlide(slide - 1),
          (fourthLineRef.current.style.outline = '4px solid #939191'),
          (thirdLineRef.current.style.outline = '4px solid red')
        );

      default:
        break;
    }
  };

  return render(
    slide,
    paginatedPosts,
    NextSlide,
    PreviousSlide,
    firstLineRef,
    secondLineRef,
    thirdLineRef,
    fourthLineRef
  );
};

export default Carousel;
