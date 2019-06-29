import React from 'react';
import { FooterWrapper } from './algoliaComponent.style';
const algoliSrc = '/static/image/algolia.svg';

export default () => (
  <FooterWrapper className="isoAlgoliaFooter">
    <span>Powred by</span>
    <div className="isoLogoWrapper">
      <img alt="#" src={algoliSrc} />
    </div>
  </FooterWrapper>
);
