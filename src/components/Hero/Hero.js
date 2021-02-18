import React from 'react';

import NavBar from 'components/NavBar/NavBar';
import Bevel from 'components/Bevel/Bevel';

import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import { StyledWrapper, StyledContent, StyledIconsWrapper } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
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

  console.log(bgImage);

  return (
    <BackgroundImage id="hero" fluid={bgImage} backgroundColor={'#41A1B1'}>
      <NavBar />
      <StyledWrapper>
        <StyledContent>
          <Image fluid={heroImg} alt="img" />
          <h1>Kamil Partyka</h1>
          <h2>Front-end Developer</h2>
          <StyledIconsWrapper>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Mail"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </StyledIconsWrapper>
        </StyledContent>
      </StyledWrapper>
      <Bevel />
    </BackgroundImage>
  );
};

export default Hero;
