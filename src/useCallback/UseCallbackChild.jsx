import React from "react";

const UseCallbackChild = React.memo(({ consoleData }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={consoleData}>
        Run Parent Callback
      </button>
    </div>
  );
});

export default UseCallbackChild;
