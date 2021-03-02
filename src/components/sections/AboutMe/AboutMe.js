import React from 'react';

import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Header from 'components/simple/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { StyledWrapper, StyledInnerWrapper, StyledText } from './styles';

const AboutMe = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "KamilPartyka.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const portraitImg = data.file.childImageSharp.fluid;

  return (
    <>
      <StyledWrapper id="aboutMe">
        <StyledInnerWrapper>
          <Header title="About me" />
          <Image fluid={portraitImg} />
          <StyledText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              accumsan, tortor eu porttitor pulvinar, nulla libero fringilla
              neque, in sagittis odio erat sed ligula. Praesent mauris sem,
              sollicitudin non volutpat in, bibendum vel ante. Nullam mollis
              pharetra tempus. Nulla lobortis lorem risus, eu dignissim neque
              ornare vel. Donec tristique arcu id tristique accumsan. Sed
              efficitur nunc libero, a efficitur mauris venenatis malesuada.
              Nulla consectetur, libero et rutrum varius, nunc quam consectetur
              tellus, elementum ornare risus risus ac lectus.
            </p>
            <FontAwesomeIcon id="codeIcon" icon={faCode} />
          </StyledText>
        </StyledInnerWrapper>
      </StyledWrapper>
    </>
  );
};

export default AboutMe;
