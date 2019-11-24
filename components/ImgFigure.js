import React from 'react';
import Img from '../components/Img'

export default ({src, caption}) => (
  <figure>
    <Img src={src} alt={caption} />
    <figcaption>{caption}</figcaption>
  </figure>
)
