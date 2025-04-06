import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bevel from 'components/Bevel';
import Header from 'components/Header';
import PortfolioBox from 'components/PortfolioBox';

import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { StyledWrapper, StyledInnerWrapper, StyledItemsWrapper, StyledSvgWrapper } from './styles';

type PortfolioItem = {
  id: string;
  webLink: string;
  gitLink: string;
  image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
  description: string;
};

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

  const portfolioItemsArr: PortfolioItem[] = data.allPortfolioItemsJson.nodes;

  return (
    <>
      <Bevel color="gray" isReverse />
      <StyledWrapper>
        <StyledInnerWrapper>
          <div id="portfolio">
            <Header secondary title="Portfolio" />
            <FontAwesomeIcon id="fileIcon" icon={faFileCode} />
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
          <FontAwesomeIcon id="fileIcon" icon={faLaptopCode} />
        </StyledSvgWrapper>
      </StyledWrapper>
    </>
  );
};

export default Portfolio;
