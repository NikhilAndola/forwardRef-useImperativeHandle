import React, { useState, useRef } from "react";
import CustomInput from "./CustomInput";

export default function App() {
  const [value, setValue] = useState("red");
  const inputRef = useRef();
  // console.log("accessing ref from child",inputRef.current.alertHi());
  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Click me</button>
    </>
  );
}
