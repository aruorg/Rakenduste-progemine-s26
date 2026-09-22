import { useParams } from "react-router-dom";

function TaskDetails({ tasks }) {
  const { taskId } = useParams();

  const id = Number(taskId);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <main>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>
        {task.completed ? "Completed" : "Incomplete"}
      </p>
    </main>
  );
}

export default TaskDetails;