import React from 'react';

import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledImageWrapper,
  StyledHover,
  StyledImage,
  StyledText,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

const PortfolioBox = ({ webLink, gitLink, image, description }) => {
  const links = () => (
    <div>
      <a href={webLink} target="_blank" rel="noopener noreferrer" title="Link">
        <FontAwesomeIcon icon={faLink} />
      </a>
      <a
        href={gitLink}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FontAwesomeIcon icon={faGitAlt} />
      </a>
    </div>
  );

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledImageWrapper>
          <StyledHover id="hover">{links()}</StyledHover>
          <StyledImage imgSrc={image} />
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
