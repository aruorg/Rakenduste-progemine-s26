import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Do homework',
      description: 'Math, Biology notes',
      completed: true,
    },
    {
      id: 2,
      title: 'Clean home',
      description: 'Deep clean kitchen',
      completed: false,
    },

    {
      id: 3,
      title: 'Groceries',
      description: 'Order groceries',
      completed: false,
    },
    {
      id: 4,
      title: 'Make reservation',
      description: "Make reservation for friend's bday",
      completed: true,
    },
  ]);

  let filteredTasks = tasks;

  if (filter === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === 'incomplete') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  function handleAddTask(title, description) {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <> 
    <Header/>
      <Routes>
        <Route path="/"
         element={<Home tasks={tasks} />} 
         />
        <Route path="/tasks"
          element={
          <TaskList
          tasks={filteredTasks}
          setFilter={setFilter}
          onToggle={toggleTask}
          onDelete={deleteTask}
          showForm={showForm}
          setShowForm={setShowForm}
          addTask={handleAddTask}/>} 
          />
        <Route path="/tasks/:taskId"
         element={<TaskDetails tasks={tasks} />} 
         />
        <Route path="*" element={<NotFound />} />
      </Routes>

     

      
    </>
  );
}

export default App;
