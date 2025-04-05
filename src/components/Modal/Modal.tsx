import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { StyledButton } from '../Button/styles';

import { StyledModalWrapper, StyledModal } from './styles';
import { StaticImage } from 'gatsby-plugin-image';

interface ModalProps {
  callbackFn: () => void;
}

const Modal = ({ callbackFn }: ModalProps) => (
  <StyledModalWrapper>
    <StyledModal>
      <h2>It&apos;s a Secret to Everybody.</h2>
      <StaticImage
        src='../../images/rupee.png'
        alt='Rupee'
        title='Rupee'
        placeholder='blurred'
        layout='fixed'
        width={50}
        height={100}
        quality={100}
        formats={['auto', 'webp']}
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
