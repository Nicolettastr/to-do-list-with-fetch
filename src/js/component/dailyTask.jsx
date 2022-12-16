import React from "react";

const DailyTask = (props) => {

    const handleClickDaily = (event) => {
        props.removeDailyTask(event.target.id);
    };

  return (
    <>
      <div className="d-flex taskItem">
        <li className="element">
          {props.taskE}
        </li>
        <button
          type="button"
          className="btn-close btn inactive"
          id={props.index}
          aria-label="Close"
          onClick={handleClickDaily}
        ></button>
      </div>
    </>
  );
};

export default DailyTask;
