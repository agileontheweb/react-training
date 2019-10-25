import React from 'react';
import  { MyCarousel } from './components/MyCarousel';

import  { FirstGallery } from './asset/FirstGallery';
import  { SecondGallery } from './asset/SecondGallery';

export const Gallery = () => {

  return(
    <div className="mt-5">
      <h1>Gallery</h1>
      <MyCarousel
        array={FirstGallery}
        heightContainerInner="350px" />

        <h2>Another Gallery</h2>

        <MyCarousel
          array={SecondGallery} />
    </div>
  )
}
