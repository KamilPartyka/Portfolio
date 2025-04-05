import * as React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 50rem;
  }

  a {
    font-size: 2rem;
  }
`;

const NotFoundPage = () => (
  <StyledWrapper>
    <img
      src='https://i.giphy.com/media/joV1k1sNOT5xC/giphy.webp'
      alt='error 404'
    />
    <br />
    <Link to='/'>Back to site</Link>
  </StyledWrapper>
);

export default NotFoundPage;
