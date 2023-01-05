import React from "react";

const Input = (props) => {
  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.handlekeyUp(event.target.value);
    }

  };


  return (
    <>
      <input type="text" onKeyUp={handleKey} className="input" placeholder="Introduce new task"/>
    </>
  );
};

export default Input;
