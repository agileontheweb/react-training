import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

type CarouselProps = {
  array: array,
  name: string,
  src: string,
  capitionText: string,
  heightContainerInner: number
}

export const MyCarousel = ({array, name, src, capitionText, heightContainerInner}: CarouselProps ) => (

  <div>
  {array.map((gallery, index) =>
    <Carousel key={index}>
      {gallery.gallery.map((gallery, index) =>
        <Carousel.Item key={index} style={{height: heightContainerInner}}>
          <img
            key={index}
            className="d-block w-100"
            src={gallery.src}
            alt={gallery.title}
          />
        <Carousel.Caption>
          <h3>{gallery.title}</h3>
          <p>{gallery.textCaption}</p>
        </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  )}
  </div>
)
