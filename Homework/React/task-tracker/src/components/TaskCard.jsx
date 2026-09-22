import './TaskCard.css';
import { Link } from 'react-router-dom';

export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="task-card">
      <Link to={`/tasks/${task.id}`}>
        <h2>{task.title}</h2>
      </Link>
      <p>{task.description}</p>
      <p id="task-state">{task.completed ? 'completed' : 'incomplete'}</p>

      <button onClick={() => onToggle(task.id)}>Change task state</button>

      <button onClick={() => onDelete(task.id)}>Delete task</button>
    </div>
  );
}

export default TaskCard;
