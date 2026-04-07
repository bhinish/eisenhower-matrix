import '../styles/QuadrantNode.css';

export default function QuadrantNode({ data }) {
  return (
    <div className={`quadrant-node quadrant-${data.quadrant}`}>
      <div className="quadrant-header" style={{ background: data.color }}>
        <span className="quadrant-title">{data.label}</span>
        <span className="quadrant-subtitle">{data.subtitle}</span>
      </div>
      <div className="quadrant-body" />
    </div>
  );
}
