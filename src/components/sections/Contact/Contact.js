import React, { useState } from 'react';

import Bevel from 'components/simple/Bevel/Bevel';
import Header from 'components/simple/Header/Header';
import Input from 'components/simple/Input/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import StyledButton from 'components/simple/Button/styles';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledFormWrapper,
  StyledForm,
  StyledSend,
} from './styles';

const Contact = () => {
  const [formState, setFormState] = useState({
    fields: { email: '', message: '' },
    errors: { email: '', message: '' },
  });

  const [sendingMsg, setsendingMsg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: value,
      },
    }));
  };

  const handleClearForm = () => {
    const fields = {};
    fields.email = '';
    fields.message = '';
    setFormState((prevState) => ({
      ...prevState,
      fields,
    }));
  };

  const validateForm = () => {
    const { email } = formState.fields;
    const { message } = formState.fields;
    let isFormValid = true;
    const errors = {};

    const pattern = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ); // from https://emailregex.com/

    if (!pattern.test(email)) {
      isFormValid = false;
      errors.email = 'Please enter valid Email address';
    }
    if (!email) {
      isFormValid = false;
      errors.email = 'This field is required';
    }
    if (message && message.length < 10) {
      isFormValid = false;
      errors.message = 'Message must contain more characters';
    }
    if (!message) {
      isFormValid = false;
      errors.message = 'This field is required';
    }

    setFormState((prevState) => ({
      ...prevState,
      errors,
    }));

    return isFormValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // send

      setsendingMsg('Message sent successfully');
      setTimeout(() => setsendingMsg(null), 3000);

      handleClearForm();
    } else {
      // not send
    }
  };

  return (
    <>
      <Bevel isBlue isReverse />
      <StyledWrapper id="contact">
        <StyledInnerWrapper>
          <Header title="Contact" />
          <StyledFormWrapper>
            <StyledForm onSubmit={handleFormSubmit} autoComplete="off">
              <Input
                label="Your mail:"
                name="email"
                placeholder="Please write mail to response"
                onChange={handleInputChange}
                value={formState.fields.email}
                errorMsg={formState.errors.email}
              />
              <Input
                isTextarea
                label="How can I help You?"
                name="message"
                placeholder="Please write your message here"
                maxLength={250}
                onChange={handleInputChange}
                value={formState.fields.message}
                errorMsg={formState.errors.message}
              />

              <StyledButton type="submit">Sumbit</StyledButton>
              {sendingMsg && (
                <StyledSend>
                  <h2>{sendingMsg}</h2>
                </StyledSend>
              )}

              <FontAwesomeIcon icon={faEnvelope} />
            </StyledForm>
          </StyledFormWrapper>
        </StyledInnerWrapper>
      </StyledWrapper>
    </>
  );
};

export default Contact;
