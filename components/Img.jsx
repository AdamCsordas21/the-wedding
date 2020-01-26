import React from 'react';

export default ({src, alt}) => <img style={{
  display: 'block',
  boxSizing: 'border-box',
  maxWidth: '100%',
  marginBottom: '30px',
  border: '14px solid #fff',
  boxShadow: '0 6px 6px rgba(0, 0, 0, 0.25)'
}} src={src} alt={alt} />