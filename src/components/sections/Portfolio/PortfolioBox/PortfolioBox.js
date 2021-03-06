import React from 'react';

import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledImageWrapper,
  StyledHover,
  StyledImage,
  StyledText,
} from './styles';

const PortfolioBox = ({ webLink, gitLink, image, description }) => {
  const links = () => (
    <div>
      {webLink && (
        <a
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Link"
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
      )}
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
          <BackgroundImage id="pageImg" fluid={image}>
            <StyledImage />
          </BackgroundImage>
        </StyledImageWrapper>
        <StyledText>
          <p>{description}</p>
          {links()}
        </StyledText>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

PortfolioBox.propTypes = {
  webLink: PropTypes.string,
  gitLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetType: PropTypes.string,
    sizes: PropTypes.string,
    originalImg: PropTypes.string,
  }).isRequired,
};

PortfolioBox.defaultProps = {
  webLink: null,
  description: 'One of the websites I created',
};

export default PortfolioBox;
