import React from "react";

const ChildRef = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
export default ChildRef;
