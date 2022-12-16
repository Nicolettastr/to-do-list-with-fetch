import React from "react";
import Task from "./task.jsx";

const List = (props) => {

    const taskList = props.taskItem.map((item, index) => {
        return <Task item={item} key={index} index={index} removeTask={props.removeTask} taskList={props.taskList}/>
    });


    return (
        <section>
            <ul className="list-section">
                {taskList}
            </ul>
        </section>
    )
};

export default List;