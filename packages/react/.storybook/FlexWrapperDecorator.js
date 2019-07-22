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
    <div
      style={{
        display: "block",
        width: "90%",
      }}
    >
      {storyFn()}
    </div>
  </div>
);

export default FlexWrapperDecorator;
