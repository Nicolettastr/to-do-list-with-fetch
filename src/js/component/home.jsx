import React, { useEffect, useState } from "react";
import Input from "./input.jsx";
import List from "./list.jsx";

//create your first component
const Home = () => {

  let [taskItem, setTaskItems] = useState([]);
  let [taskElement, setTaskElement] = useState([]);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/nicolettastru")
    .then((response) => response.json())
    .then((data) => {
      const taskData = data.map((taskName) => {
        return {
          task: taskName.label
        }
      })

      setTaskElement(taskData)
    })
  }, [])
  

    console.log(taskElement)

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
          <List taskItem={taskItem} removeTask={removeTask} taskElement={taskElement}/>
        </div>
      </div>
    </section>
  );
};

export default Home;
