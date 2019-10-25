import React from 'react';
import  { MyCarousel } from './components/MyCarousel';

import  { FirstGallery } from './asset/FirstGallery';
import  { SecondGallery } from './asset/SecondGallery';

export const Gallery = () => {

  return(

    <div>
      <h1>Gallery</h1>
      <MyCarousel
        array={FirstGallery} />

        <h2>Another Gallery</h2>

        <MyCarousel
          array={SecondGallery} />
    </div>
  )
}
