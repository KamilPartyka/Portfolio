import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Bevel from 'components/Bevel';
import Header from 'components/Header';
import PortfolioBox from 'components/PortfolioBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledItemsWrapper,
  StyledSvgWrapper,
} from './styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

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
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const portfolioItemsArr: {
    id: string;
    webLink: string;
    gitLink: string;
    image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    description: string;
  }[] = data.allPortfolioItemsJson.nodes;

  return (
    <>
      <Bevel isReverse />
      <StyledWrapper>
        <StyledInnerWrapper>
          <div id='portfolio'>
            <Header
              secondary
              title='Portfolio'
            />
            <FontAwesomeIcon
              id='fileIcon'
              icon={faFileCode}
            />
          </div>
          <StyledItemsWrapper>
            {portfolioItemsArr.map((item) => {
              const { id, webLink, gitLink, description, image } = item;
              const imageLink = image.childImageSharp.gatsbyImageData;
              return (
                <PortfolioBox
                  key={id}
                  webLink={webLink}
                  gitLink={gitLink}
                  image={imageLink}
                  description={description}
                />
              );
            })}
          </StyledItemsWrapper>
        </StyledInnerWrapper>
        <StyledSvgWrapper>
          <FontAwesomeIcon
            id='fileIcon'
            icon={faLaptopCode}
          />
        </StyledSvgWrapper>
      </StyledWrapper>
    </>
  );
};

export default Portfolio;
