import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from 'components/Header';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { StyledWrapper, StyledInnerWrapper, StyledText } from './styles';

const AboutMe = () => (
  <StyledWrapper id="aboutMe">
    <StyledInnerWrapper>
      <Header title="About me" />
      <StaticImage
        src="../../images/kamilpartyka.jpg"
        width={400}
        height={600}
        formats={['webp', 'auto']}
        alt="img"
        quality={100}
        placeholder="blurred"
      />
      <StyledText>
        <p>
          Front-End Developer with a strong focus on performance, scalability, and SEO, leveraging
          modern technologies like TypeScript and React-based frameworks.
        </p>
        <br />
        <p>
          I’ve worked across a variety of projects — from small-scale web applications to
          large-scale e-commerce platforms — where I was responsible for delivering new features,
          optimizing existing code, and ensuring long-term maintainability.
        </p>
        <br />
        <p>
          My experience spans complex refactoring efforts, legacy code migrations, dependency
          updates (e.g., major Node.js versions), and rewriting outdated test suites. I’m
          particularly passionate about clean code and forward-compatible solutions.
        </p>
        <br />
        <p>
          Beyond development, I actively contribute to company culture and team growth. I’ve
          organized internal events, hosted public workshops, facilitated agile processes (daily
          stand-ups, sprint plannings, retrospectives), and participated in recruiting new front-end
          talents.
        </p>
        <FontAwesomeIcon id="codeIcon" icon={faCode} />
      </StyledText>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default AboutMe;
