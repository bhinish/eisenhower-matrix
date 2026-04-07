import '../styles/TaskNode.css';

export default function TaskNode({ data }) {
  return (
    <div className="task-node">
      {data.label}
    </div>
  );
}
