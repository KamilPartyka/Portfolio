import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import rupee from 'images/Rupee.png';
import { StyledButton } from '../Button/styles';

import { StyledModalWrapper, StyledModal } from './styles';

interface ModalProps {
  callbackFn: () => void;
}

const Modal = ({ callbackFn }: ModalProps) => (
  <StyledModalWrapper>
    <StyledModal>
      <h2>It&apos;s a Secret to Everybody.</h2>
      <img
        src={rupee}
        alt='Rupee'
        title='Rupee'
      />
      <h3>
        Thanks for visiting! <br />
        Have a good day
      </h3>
      <StyledButton onClick={() => callbackFn()}>Close</StyledButton>
      <FontAwesomeIcon icon={faHeart} />
    </StyledModal>
  </StyledModalWrapper>
);

export default Modal;
