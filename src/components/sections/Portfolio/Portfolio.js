import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Bevel from 'components/simple/Bevel/Bevel';
import Header from 'components/simple/Header/Header';
import PortfolioBox from 'components/sections/Portfolio/PortfolioBox/PortfolioBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledItemsWrapper,
  StyledSvgWrapper,
} from './styles';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPortfolioItemsJson {
        nodes {
          description
          gitLink
          id
          webLink
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const portfolioItemsArr = data.allPortfolioItemsJson.nodes;

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
            {portfolioItemsArr.map((item) => {
              const { id, webLink, gitLink, description } = item;
              const image = item.image.childImageSharp.fluid;
              return (
                <PortfolioBox
                  key={id}
                  webLink={webLink}
                  gitLink={gitLink}
                  image={image}
                  description={description}
                />
              );
            })}
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
