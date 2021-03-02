import React from 'react';

import PropTypes from 'prop-types';

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

PortfolioBox.propTypes = {
  webLink: PropTypes.string,
  gitLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
};

PortfolioBox.defaultProps = {
  webLink: null,
  description: 'One of the websites I created',
};

export default PortfolioBox;
