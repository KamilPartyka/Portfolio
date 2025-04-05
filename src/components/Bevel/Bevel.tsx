import React from 'react';

import StyledBevel from './styles';

interface BevelProps {
  isReverse?: boolean;
  isBlue?: boolean;
}

const Bevel = ({ isReverse = false, isBlue = false }: BevelProps) => (
  <StyledBevel
    isReverse={isReverse}
    isBlue={isBlue}
  />
);

export default Bevel;
