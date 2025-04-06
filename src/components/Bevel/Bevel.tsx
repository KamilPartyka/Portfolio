import React from 'react';

import StyledBevel from './styles';

interface BevelProps {
  color: 'blue' | 'gray';
  isReverse?: boolean;
}

const Bevel = ({ isReverse = false, color }: BevelProps) => (
  <StyledBevel isReverse={isReverse} color={color} />
);

export default Bevel;
