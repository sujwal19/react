import { useReducer, useEffect } from "react";
import { todoReducer, initialState } from "../todoReducer";
import { loadTasks, saveTasks } from "../../../utils/storage";

export function useTasks() {
  const [tasks, dispatch] = useReducer(todoReducer, initialState, loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return [tasks, dispatch];
}
