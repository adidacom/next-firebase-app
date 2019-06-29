import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';

export default ({ style, children, className }) => (
  <Scrollbar className={className} style={style}>
    {children}
  </Scrollbar>
);
