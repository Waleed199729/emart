import React, { useEffect, useState, useRef } from "react";
import "./ParentRef.css";
import ChildRef from "./ChildRef";
import { Container } from "react-bootstrap";

const ParentRef = () => {
  const [input, setInput] = useState("");
  //   const [count, setCount] = useState(1);
  const count = useRef(1);
  const inputRef = useRef();
  useEffect(() => {
    // console.log(inputRef.current);
    // setCount((prevState) => prevState + 1);
    count.current += 1;
  });

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log(inputRef.current.value);
    if (!value)
      inputRef.current.focus(); //(it is a function "current.focus()" )   when input field is empty then is will focus on it whenever it render or we click on the input field
    else alert(value);
  };

  return (
    <Container>
      <div className="parentref_main">
        <ChildRef
          ref={inputRef} //it tells us how many time our element will render in the Dom
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}> Submit </button>
        <hr />
        <div> You Entered "{input}" </div>
        <div>Rerender: {count.current} </div>
      </div>
    </Container>
  );
};

export default ParentRef;
