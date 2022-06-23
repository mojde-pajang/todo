import useTasks from "../useTasks";
import Todo from "./Todo";

const  Completed = () => {
  const { tasks } = useTasks();
  return (
    <div className="container">
      <h3>All</h3>
      <ul>
        {tasks.map((item, index) => {
          if (!item.complete) return;
          return <Todo key={index} index={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Completed ;
