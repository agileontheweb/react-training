import React from 'react';

import Carousel from 'react-bootstrap/Carousel'


type CarouselProps = {
  image: string,
  title: string,
  text: string,
}

export const MyCarousel = ({title, image, text}: CarouselProps ) => (

  <Carousel>
    {[...Array(10)].map((x, i) =>
      <Carousel.Item key={i}>
      <img
        className="d-block w-100"
        src={image}
        alt={title}
      />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>text</p>
      </Carousel.Caption>
      </Carousel.Item>
    )}
  </Carousel>
)
