import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bevel from 'components/Bevel';
import { StyledButton } from 'components/Button/styles';
import Header from 'components/Header';
import Input from 'components/Input';

import React, { ChangeEvent, useState } from 'react';
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

  const [sendingMsg, setSendingMsg] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: value,
      },
    }));
  };

  const handleClearForm = () => {
    const fields = {
      email: '',
      message: '',
    };
    setFormState((prevState) => ({
      ...prevState,
      fields,
    }));
  };

  const validateForm = () => {
    const { email } = formState.fields;
    const { message } = formState.fields;
    let isFormValid = true;
    const errors = {
      email: '',
      message: '',
    };
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // success
      alert('This form is just a demo, so it does not send any message');

      setSendingMsg('Message sent successfully');
      setTimeout(() => setSendingMsg(null), 2000);

      handleClearForm();
    } else {
      // error

      setSendingMsg('Message could not be sent');
      setTimeout(() => setSendingMsg(null), 2000);
    }
  };

  return (
    <>
      <Bevel color="blue" isReverse />
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

              <StyledButton type="submit">Submit</StyledButton>
              {sendingMsg ? (
                <StyledSend>
                  <h2>{sendingMsg}</h2>
                </StyledSend>
              ) : null}

              <FontAwesomeIcon icon={faEnvelope} />
            </StyledForm>
          </StyledFormWrapper>
        </StyledInnerWrapper>
      </StyledWrapper>
    </>
  );
};

export default Contact;
