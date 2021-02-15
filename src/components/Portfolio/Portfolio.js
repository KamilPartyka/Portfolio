import React from 'react';

import Bevel from 'components/Bevel/Bevel';

import { StyledWrapper } from './styled';

const Portfolio = () => {
  return (
    <>
      <Bevel color reverse />
      <StyledWrapper id="portfolio">
        <h2>Portfolio</h2>
      </StyledWrapper>
    </>
  );
};

export default Portfolio;
