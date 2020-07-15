import * as React from 'react';

export default storyFn => (
  <div
    style={{
      minHeight: '100vh',
      backgroundColor: '#ECEFF8',
      padding: '1rem 3rem',
    }}
  >
    {storyFn()}
  </div>
);
