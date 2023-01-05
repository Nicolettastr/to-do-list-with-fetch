import React from "react";
import DailyTask from "./dailyTask.jsx";
import Task from "./task.jsx";

const List = (props) => {

    const taskList = props.taskItem.map((item, index) => {
        return <Task item={item} key={index} index={index} removeTask={props.removeTask} taskList={props.taskList}/>
    });

    const taskElementItems = props.taskElement.map((item, index) => {
        return <DailyTask key={index} id={index} taskE={item.task} removeDailyTask={props.removeDailyTask}/>
    })


    return (
      <section>
        <ul>
          <div className="list-section div-section">
            <h2>Tasks</h2>
            {taskList}
          </div>
          <div className="list-section div-section">
            {taskElementItems}
          </div>
        </ul>
      </section>
    );
};

export default List;