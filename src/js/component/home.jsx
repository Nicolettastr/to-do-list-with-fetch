import React, { useState } from "react";
import Input from "./input.jsx";
import List from "./list.jsx";

//create your first component
const Home = () => {

  let [taskItem, setTaskItems] = useState([]);

  const handlekeyUp = (newTask) => {
    if (newTask === "") {
      alert("Introduce a task");
    } else {
      setTaskItems([...taskItem, newTask]);
    }
  };

  const removeTask = (index) => {
    taskItem.splice(index, 1);
    setTaskItems([...taskItem]);
  };

  return (
    <section className="taskList-container"> 
      <div className="text-center">
        <div>
          <Input handlekeyUp={handlekeyUp} />
        </div>
        <div>
          <List taskItem={taskItem} removeTask={removeTask}/>
        </div>
      </div>
    </section>
  );
};

export default Home;
