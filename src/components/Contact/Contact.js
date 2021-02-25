import React from 'react';

import Bevel from 'components/Bevel/Bevel';
import Header from 'components/Header/Header';

import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledFormWrapper,
  StyledForm,
} from './styled';

const Contact = () => {
  return (
    <>
      <Bevel isBlue isReverse />
      <StyledWrapper id="contact">
        <StyledInnerWrapper>
          <Header title="Contact" />
          <StyledFormWrapper>
            <StyledForm></StyledForm>
          </StyledFormWrapper>
        </StyledInnerWrapper>
      </StyledWrapper>
    </>
  );
};

export default Contact;
