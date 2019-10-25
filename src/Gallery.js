import React from 'react';
import { useState } from 'react';

import {MyCarousel} from './components/MyCarousel';

import Carousel from 'react-bootstrap/Carousel'


var galleries = [
 {
     id: 1,
     name: 'Galleria 1',
     gallery:
         [{
           src: 'https://images.pexels.com/photos/2780349/pexels-photo-2780349.jpeg',
           title: 'titolo 1 immagine'
         },
         {
           src: 'https://images.pexels.com/photos/2858374/pexels-photo-2858374.jpeg',
           title: 'titolo 2 immagine'
         }
       ]
 }
];

export const Gallery = () => {
  return(
    <div>
      <h1>Gallery</h1>

      {galleries.map((gallery, index) =>
        <Carousel key={index}>
          {gallery.gallery.map((gallery, index) =>
            <Carousel.Item>
              <img
                key={index}
                className="d-block w-100"
                src={gallery.src}
                alt={gallery.title}
              />
            <Carousel.Caption>
              <h3>{gallery.title}</h3>
              <p>text</p>
            </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      )}
    </div>
  )
}
