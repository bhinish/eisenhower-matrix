import { useCallback } from 'react';
import { ReactFlow, useNodesState, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import QuadrantNode from './components/QuadrantNode';
import TaskNode from './components/TaskNode';
import AddTaskForm from './components/AddTaskForm';
import { initialNodes, QUADRANT_POSITIONS } from './data/initialNodes';

// Defined at module scope to prevent React Flow re-mount warning
const nodeTypes = {
  quadrantNode: QuadrantNode,
  taskNode: TaskNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const addTask = useCallback((label) => {
    const inboxTasks = nodes.filter(
      (n) => n.type === 'taskNode' && n.position.y >= QUADRANT_POSITIONS.inbox.y
    );
    const col = inboxTasks.length % 5;
    const row = Math.floor(inboxTasks.length / 5);

    const newNode = {
      id: `task-${Date.now()}`,
      type: 'taskNode',
      connectable: false,
      position: {
        x: QUADRANT_POSITIONS.inbox.x + 20 + col * 190,
        y: QUADRANT_POSITIONS.inbox.y + 50 + row * 60,
      },
      data: { label },
    };

    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Axis labels */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      }}>
        <AxisLabels />
      </div>

      <ReactFlow
        nodes={nodes}
        edges={[]}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        nodesConnectable={false}
        connectOnClick={false}
        defaultViewport={{ x: 60, y: 40, zoom: 0.9 }}
        minZoom={0.3}
        maxZoom={2}
        snapToGrid
        snapGrid={[10, 10]}
        proOptions={{ hideAttribution: true }}
        deleteKeyCode={['Backspace', 'Delete']}
      >
        <Background color="#cbd5e1" gap={24} variant={BackgroundVariant.Dots} />
      </ReactFlow>

      <AddTaskForm onAdd={addTask} />
    </div>
  );
}

function AxisLabels() {
  const style = {
    position: 'absolute',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    color: '#94a3b8',
    textTransform: 'uppercase',
  };

  return (
    <>
      {/* Horizontal axis — top */}
      <div style={{ ...style, top: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 180 }}>
        <span>← Urgent</span>
        <span>Not Urgent →</span>
      </div>
      {/* Vertical axis — left */}
      <div style={{
        ...style,
        top: '40%',
        left: 14,
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center center',
        whiteSpace: 'nowrap',
      }}>
        Important ↑
      </div>
      <div style={{
        ...style,
        top: '60%',
        left: 14,
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center center',
        whiteSpace: 'nowrap',
      }}>
        ↓ Not Important
      </div>
    </>
  );
}
