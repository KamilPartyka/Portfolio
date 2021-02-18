import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <>
      <div style={({ width: '100vw' }, { margin: '20px' })}>
        <img
          style={{ width: '100%' }}
          src="https://i.giphy.com/media/joV1k1sNOT5xC/giphy.webp"
        />
        <Link to="/">Go home</Link>.
      </div>
    </>
  );
};

export default NotFoundPage;
