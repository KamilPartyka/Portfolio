import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bevel from 'components/Bevel';
import NavBar from 'components/NavBar';
import { StaticImage } from 'gatsby-plugin-image';

import scrollTo from 'gatsby-plugin-smoothscroll';

import React from 'react';
import { StyledWrapper, StyledContent, StyledIconsWrapper, StyledArrows } from './styles';

interface HeroProps {
  reference: React.RefObject<HTMLDivElement> | ((node?: HTMLDivElement | null) => void);
}

const Hero = ({ reference }: HeroProps) => (
  <section style={{ position: 'relative' }}>
    <StaticImage
      id="hero"
      src="../../images/hero-bg.png"
      backgroundColor="#41A1B1"
      formats={['webp', 'auto']}
      alt="img"
      quality={100}
      placeholder="blurred"
      style={{
        position: 'absolute',
        width: '100%',
        height: '110%',
        zIndex: -1,
      }}
    />
    <NavBar />
    <StyledWrapper>
      <StyledContent>
        <StaticImage
          src="../../images/kamilpartyka.jpg"
          width={300}
          height={300}
          formats={['webp', 'auto']}
          alt="img"
          quality={100}
          placeholder="blurred"
        />
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
          <button type="button" title="Contact" onClick={() => scrollTo('#contact')}>
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
      <StyledArrows ref={reference} onClick={() => scrollTo('#aboutMe', 'center')}>
        <FontAwesomeIcon id="arrow1" icon={faChevronDown} />
        <FontAwesomeIcon id="arrow2" icon={faChevronDown} />
      </StyledArrows>
    </StyledWrapper>
    <Bevel color="gray" />
  </section>
);

export default Hero;
