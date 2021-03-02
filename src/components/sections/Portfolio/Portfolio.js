import React from 'react';

import Bevel from 'components/simple/Bevel/Bevel';
import Header from 'components/simple/Header/Header';
import PortfolioBox from 'components/sections/Portfolio/PortfolioBox/PortfolioBox';

import { portfolioItems } from 'data/portfolioItems';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledItemsWrapper,
  StyledSvgWrapper,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <>
      <Bevel isReverse />
      <StyledWrapper>
        <StyledInnerWrapper>
          <div id="portfolio">
            <Header secondary title="Portfolio" />
            <FontAwesomeIcon id="fileIcon" icon={faFileCode} />
          </div>
          <StyledItemsWrapper>
            {portfolioItems.map((item, index) => (
              <PortfolioBox key={index} {...item} />
            ))}
          </StyledItemsWrapper>
        </StyledInnerWrapper>
        <StyledSvgWrapper>
          <FontAwesomeIcon id="fileIcon" icon={faLaptopCode} />
        </StyledSvgWrapper>
      </StyledWrapper>
    </>
  );
};

export default Portfolio;
