import * as React from "react";

const CustomInput = ({ style, props }, ref) => {
  React.useImperativeHandle(ref, () => {
    return {
      alertHi: () => {
        alert("hii");
      }
    };
  });
  return (
    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: "0.25em",
        borderBottom: "0.1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style
      }}
    />
  );
};

export default React.forwardRef(CustomInput);
