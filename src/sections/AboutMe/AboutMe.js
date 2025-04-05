import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Header from 'components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { StyledWrapper, StyledInnerWrapper, StyledText } from './styles';

const AboutMe = () => (
  <StyledWrapper id='aboutMe'>
    <StyledInnerWrapper>
      <Header title='About me' />
      <StaticImage
        src='../../images/KamilPartyka.jpeg'
        width={300}
        height={300}
        formats={['webp', 'auto']}
        alt='img'
        quality={100}
        placeholder='blurred'
      />
      <StyledText>
        <p>
          Hello, I&apos;m Kamil Partyka, I&apos;m interested in technology, street photography, portrait photography and
          front-end technologies that I&apos;ve been learning for over a year.
          <br />
          I am familiar with semantic HTML5 and CSS. I know BEM methodology, JavaScript basics with ES6+ elements,
          ReactJS and GatsbyJS basics with Styled Components or CSS Modules. I can also use Git version control system
          (GitHub, GitLab).
          <br />I believe that a full-time job as a front-end developer will allow me to further develop my skills in
          front-end technologies, communication and design.
        </p>
        <FontAwesomeIcon
          id='codeIcon'
          icon={faCode}
        />
      </StyledText>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default AboutMe;
