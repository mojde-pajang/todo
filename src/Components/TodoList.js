import React, {  useRef, useState } from "react";
import useTasks from "../useTasks"
import Todo from "./Todo";

const TodoList = () => {
  const { tasks, setTasks } = useTasks();
 // const todoTasks = useContext(tasksContext)
  const todoInput = useRef(null);
 // const [tasks, setTasks] = useState(todoTasks);
  console.log(tasks);

  const handelSubmit = (e) => {
    e.preventDefault();

    const value = todoInput.current.value;
    if (/\S+/gm.test(value)) {
      setTasks([
        ...tasks,
        {
          index: tasks.length,
          task: value,
          complete: false,
        },
      ]);
    }
    todoInput.current.value = "";
  };

  const handelRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handelEdit = (index, newTask) => {
     const newTasks = [...tasks];
    newTasks[index].task = newTask;
    setTasks(newTasks)
  };
  
  const handleComplete = (index, status) => {
    const newTasks = [...tasks];
    newTasks[index].complete = status;
    setTasks(newTasks);
  };

  return (
    <div className="container" >
      <ul>
        {tasks.map((item, index) => {
          if (item.complete) return;
          return (
            <Todo
              key={index}
              index={index}
              item={item}
              handelEdit={handelEdit}
              handelRemove={handelRemove}
              handleComplete={handleComplete}
            />
          );
        })}
      </ul>

      <form onSubmit={handelSubmit}>
        <input type="text" name="newItem" ref={todoInput} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoList;
