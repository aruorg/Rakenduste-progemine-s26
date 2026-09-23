import TaskCard from "../components/TaskCard";
import { TaskForm } from "../components/TaskForm";

function TaskList({
  tasks,
  setFilter,
  onToggle,
  onDelete,
  showForm,
  setShowForm,
  addTask,
}) {
   return (
    <main className="task-list-page">
      <div className="task-list-header">
        <h1>Tasks</h1>

        <button onClick={() => setShowForm(true)}>
          Add Task
        </button>
      </div>

      <div className="task-filters">
        <button onClick={() => setFilter("all")}>All</button>

        <button onClick={() => setFilter("completed")}>
          Completed
        </button>

        <button onClick={() => setFilter("incomplete")}>
          Incomplete
        </button>
      </div>

      {showForm && (
        <TaskForm addTask={addTask} />
      )}

      <div className="task-grid">
        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default TaskList;