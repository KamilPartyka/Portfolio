import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import rupee from 'images/Rupee.png';
import StyledButton from '../Button/styles';

import { StyledModalWrapper, StyledModal } from './styles';

const Modal = ({ callbackFn }) => (
  <StyledModalWrapper>
    <StyledModal>
      <h2>It&apos;s a Secret to Everybody.</h2>
      <img src={rupee} alt="Rupee" />
      <h3>
        Thanks for visiting! <br />
        Have a good day
      </h3>
      <StyledButton onClick={() => callbackFn()}>Close</StyledButton>
      <FontAwesomeIcon icon={faHeart} />
    </StyledModal>
  </StyledModalWrapper>
);

Modal.propTypes = {
  callbackFn: PropTypes.func.isRequired,
};

export default Modal;
