import useTasks from "../useTasks";
import Todo from "./Todo";

const All = () => {
  const { tasks } = useTasks();
  return (
    <div className="container">
      <h3>All</h3>
      <ul>
        {tasks.map((item, index) => {
          return <Todo key={index} index={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default All;
