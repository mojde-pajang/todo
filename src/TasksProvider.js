import { createContext, useState } from "react";
import todoTasks from "./todoTasks.json";

export const tasksContext = createContext({});

function TasksProvider({ children }) {
    const [tasks, setTasks] = useState(todoTasks);
    return <tasksContext.Provider value={{ tasks, setTasks }}>
        {children}
    </tasksContext.Provider>;
}

export default TasksProvider;
