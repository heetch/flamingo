import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles/GlobalStyles'

export default storyFn => (
  <>
    <GlobalStyles />
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: "#ECEFF8",
        padding: "1rem 3rem"
      }}
    >
      {storyFn()}
    </div>
  </>
);
