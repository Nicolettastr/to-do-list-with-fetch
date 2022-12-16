import React from "react";

const Task = (props) => {
  const handleClick = (event) => {
    props.removeTask(event.target.id);
  };

  return (
    <div className="d-flex taskItem">
        <li className="element">{props.item}</li>
        <button
          type="button"
          className="btn-close btn inactive"
          id={props.index}
          aria-label="Close"
          onClick={handleClick}
        ></button>
    </div>
  );
};

export default Task;
