import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledImageWrapper,
  StyledHover,
  StyledImage,
  StyledText,
} from './styles';

interface PortfolioBoxProps {
  webLink?: string;
  gitLink: string;
  description?: string;
  image: IGatsbyImageData;
}

const PortfolioBox = ({
  webLink,
  gitLink,
  image,
  description = 'One of the websites I created',
}: PortfolioBoxProps) => {
  const links = () => (
    <div>
      {webLink ? (
        <a href={webLink} target="_blank" rel="noopener noreferrer" title="Link">
          <FontAwesomeIcon icon={faLink} />
        </a>
      ) : null}
      <a href={gitLink} target="_blank" rel="noopener noreferrer" title="GitHub">
        <FontAwesomeIcon icon={faGitAlt} />
      </a>
    </div>
  );

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledImageWrapper>
          <StyledHover id="hover">{links()}</StyledHover>
          <GatsbyImage
            image={image}
            alt="img"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
          <StyledImage />
        </StyledImageWrapper>
        <StyledText>
          <p>{description}</p>
          {links()}
        </StyledText>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default PortfolioBox;
