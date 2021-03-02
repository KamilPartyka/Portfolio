import React, { useState } from 'react';

import Bevel from 'components/simple/Bevel/Bevel';
import Header from 'components/simple/Header/Header';
import Input from 'components/simple/Input/Input';

import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledFormWrapper,
  StyledForm,
  StyledSend,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
        [name]: [value],
      },
    }));
  };

  const handleClearForm = () => {
    let fields = {};
    fields['email'] = '';
    fields['message'] = '';
    setFormState((prevState) => ({
      ...prevState,
      fields: fields,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('send');

      setsendingMsg('Message sent successfully');
      setTimeout(() => setsendingMsg(null), 3000);

      handleClearForm();
    } else {
      console.log('not send');
    }
  };

  const validateForm = () => {
    const email = formState.fields.email;
    const message = formState.fields.message;
    let isFormValid = true;
    const errors = {};

    const pattern = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ); // from https://emailregex.com/

    if (!pattern.test(email)) {
      isFormValid = false;
      errors['email'] = 'Please enter valid Email address';
    }
    if (!email) {
      isFormValid = false;
      errors['email'] = 'This field is required';
    }
    if (message && message[0].length < 10) {
      isFormValid = false;
      errors['message'] = 'Message must contain more characters';
    }
    if (!message) {
      isFormValid = false;
      errors['message'] = 'This field is required';
    }

    setFormState((prevState) => ({
      ...prevState,
      errors,
    }));

    return isFormValid;
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

              <button type="submit">Sumbit</button>
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
