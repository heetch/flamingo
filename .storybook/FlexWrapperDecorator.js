import React from 'react';

const FlexWrapperDecorator = storyFn => (
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

export default FlexWrapperDecorator;
