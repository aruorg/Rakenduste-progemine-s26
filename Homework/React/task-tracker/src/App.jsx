import { useState, useEffect } from 'react';
import { getTasks } from './services/taskApi';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import PageSection from './components/PageSection';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadTasks() {
      try {
        const data = await getTasks();

        if (!ignore) {
          setTasks(data);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <p>Loading tasks</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

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
      <Header />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route
          path="/tasks"
          element={
            <PageSection title="My tasks">
              <TaskList
                tasks={filteredTasks}
                setFilter={setFilter}
                onToggle={toggleTask}
                onDelete={deleteTask}
                showForm={showForm}
                setShowForm={setShowForm}
                addTask={handleAddTask}
              />
            </PageSection>
          }
        />
        <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
