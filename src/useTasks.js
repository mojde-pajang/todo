import { useContext } from "react";
import { tasksContext } from "./TasksProvider";

const useTasks = () => {
    return useContext(tasksContext);
}

export default useTasks;