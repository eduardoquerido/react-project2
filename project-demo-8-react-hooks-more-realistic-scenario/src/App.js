import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  // FIRST SOLUTION
  // could also be used with useCallback hook
  // to guarantee that there is no loop effect for every revalueation

  // const transformTasks = useCallback((taskObj) => {
  //   const loadedTasks = [];

  //   for (const taskKey in taskObj) {
  //     loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
  // }, []);

  // Then we would pass the trasnformTasks as a parameter for useHttp();
  // const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

  // SECOND SOLUTION
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-http-e8d08-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
