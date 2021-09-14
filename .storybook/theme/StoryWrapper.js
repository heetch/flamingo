import React from 'react';

export default storyFn => (
  <div
    style={{
      minHeight: '100vh',
      padding: '1rem 3rem',
    }}
  >
    {storyFn()}
  </div>
);
