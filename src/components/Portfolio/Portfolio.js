import React from 'react';

import Bevel from 'components/Bevel/Bevel';
import Header from 'components/Header/Header';
import PortfolioBox from 'components/PortfolioBox/PortfolioBox';

import { portfolioItems } from 'data/portfolioItems';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledItemsWrapper,
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <>
      <Bevel reverse />
      <StyledWrapper>
        <StyledInnerWrapper>
          <div id="portfolio">
            <Header secondary title={'Portfolio'} />
            <FontAwesomeIcon id="fileIcon" icon={faFileCode} />
          </div>
          <StyledItemsWrapper>
            {portfolioItems.map((item, index) => (
              <PortfolioBox key={index} {...item} />
            ))}
          </StyledItemsWrapper>
        </StyledInnerWrapper>
        <div>
          <FontAwesomeIcon id="fileIcon" icon={faLaptopCode} />
        </div>
      </StyledWrapper>
    </>
  );
};

export default Portfolio;
