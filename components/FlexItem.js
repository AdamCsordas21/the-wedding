import React from 'react';
import Divider from '../components/Divider'
import P from '../components/P'

export default ({ h1, h3, children }) => <div style={{ flexBasis: '45%' }}>
  <h1 style={{
    fontFamily: "Sophia Script Medium",
    fontSize: '3em',
    lineHeight: '1.85em',
    letterSpacing: 'normal',
    fontWeight: 'normal',
    color: '#202633',
  }}>{h1}</h1>
  <h3>{h3}</h3>
  <Divider />
  <P>{children}</P>
</div>
