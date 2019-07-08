import React from "react";

const FlexWrapperDecorator = storyFn => (
  <div
    style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {storyFn()}
  </div>
);

export default FlexWrapperDecorator;
