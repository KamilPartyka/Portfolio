import React from 'react';

import PropTypes from 'prop-types';

import NavBar from 'components/simple/NavBar/NavBar';
import Bevel from 'components/simple/Bevel/Bevel';

import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
// import BackgroundImage from 'gatsby-background-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeSquare,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  StyledWrapper,
  StyledContent,
  StyledIconsWrapper,
  StyledArrows,
} from './styles';

const Hero = ({ reference }) => {
  const data = useStaticQuery(
    graphql`
      query {
        bgImage: file(relativePath: { eq: "hero-bg.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heroImg: file(relativePath: { eq: "KamilPartykaAva.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const bgImage = data.bgImage.childImageSharp.fluid;
  const heroImg = data.heroImg.childImageSharp.fluid;

  return (
    // <BackgroundImage id="hero" fluid={bgImage} backgroundColor="#41A1B1">
    <>
      <NavBar />
      <StyledWrapper>
        <StyledContent>
          <Image fluid={heroImg} alt="img" />
          <h1>Kamil Partyka</h1>
          <h2>Front-end Developer</h2>
          <StyledIconsWrapper>
            <a
              href="https://www.linkedin.com/in/kamil-partyka"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <button
              type="button"
              title="Contact"
              onClick={() => scrollTo('#contact')}
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </button>
            <a
              href="https://github.com/KamilPartyka"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </StyledIconsWrapper>
        </StyledContent>
        <StyledArrows
          ref={reference}
          onClick={() => scrollTo('#aboutMe', 'center')}
        >
          <FontAwesomeIcon id="arrow1" icon={faChevronDown} />
          <FontAwesomeIcon id="arrow2" icon={faChevronDown} />
        </StyledArrows>
      </StyledWrapper>
      <Bevel />
      </>
    // </BackgroundImage>
  );
};

Hero.propTypes = {
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Hero) }),
  ]).isRequired,
};

export default Hero;
