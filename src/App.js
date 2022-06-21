import { React, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  const onCompletion = (completedID) => {
    let updatedTaskData = taskData.map((task) => {
      if (completedID === task.id) {
        task.isComplete = !task.isComplete;
        return task;
      } else {
        return task;
      }
    });

    setTaskData(updatedTaskData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={taskData} onCompletion={onCompletion} />}</div>
      </main>
    </div>
  );
};

export default App;
