import { useState } from 'react';
import '../styles/AddTaskForm.css';

export default function AddTaskForm({ onAdd }) {
  const [label, setLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = label.trim();
    if (trimmed) {
      onAdd(trimmed);
      setLabel('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-input">New Task</label>
      <input
        id="task-input"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Describe the task..."
        autoComplete="off"
      />
      <button type="submit">Add to Inbox</button>
    </form>
  );
}
