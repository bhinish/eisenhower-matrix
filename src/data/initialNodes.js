// Canvas dimensions
// Each quadrant: 480w x 420h, 20px gap between them
// "To Be Processed" panel: full width below, at y=900

export const QUADRANT_POSITIONS = {
  q1: { x: 0,   y: 0   },
  q2: { x: 500, y: 0   },
  q3: { x: 0,   y: 440 },
  q4: { x: 500, y: 440 },
  inbox: { x: 0, y: 900 },
};

const quadrantNodes = [
  {
    id: 'q1',
    type: 'quadrantNode',
    position: QUADRANT_POSITIONS.q1,
    data: { label: 'Do First', subtitle: 'Urgent + Important', color: '#ef4444', quadrant: 'q1' },
    draggable: false,
    selectable: false,
    connectable: false,
    style: { width: 480, height: 420, zIndex: -1 },
  },
  {
    id: 'q2',
    type: 'quadrantNode',
    position: QUADRANT_POSITIONS.q2,
    data: { label: 'Schedule', subtitle: 'Not Urgent + Important', color: '#3b82f6', quadrant: 'q2' },
    draggable: false,
    selectable: false,
    connectable: false,
    style: { width: 480, height: 420, zIndex: -1 },
  },
  {
    id: 'q3',
    type: 'quadrantNode',
    position: QUADRANT_POSITIONS.q3,
    data: { label: 'Delegate', subtitle: 'Urgent + Not Important', color: '#eab308', quadrant: 'q3' },
    draggable: false,
    selectable: false,
    connectable: false,
    style: { width: 480, height: 420, zIndex: -1 },
  },
  {
    id: 'q4',
    type: 'quadrantNode',
    position: QUADRANT_POSITIONS.q4,
    data: { label: 'Eliminate', subtitle: 'Not Urgent + Not Important', color: '#6b7280', quadrant: 'q4' },
    draggable: false,
    selectable: false,
    connectable: false,
    style: { width: 480, height: 420, zIndex: -1 },
  },
  {
    id: 'inbox',
    type: 'quadrantNode',
    position: QUADRANT_POSITIONS.inbox,
    data: { label: 'To Be Processed', subtitle: 'Drag tasks into a quadrant above', color: '#475569', quadrant: 'inbox' },
    draggable: false,
    selectable: false,
    connectable: false,
    style: { width: 980, height: 180, zIndex: -1 },
  },
];

const taskNodes = [
  // Q1 — Do First
  { id: 'task-1', position: { x: 30,  y: 70  }, data: { label: 'Fix production bug' } },
  { id: 'task-2', position: { x: 200, y: 70  }, data: { label: 'Call the client back' } },
  { id: 'task-3', position: { x: 30,  y: 140 }, data: { label: 'Submit tax return' } },
  // Q2 — Schedule
  { id: 'task-4', position: { x: 530, y: 70  }, data: { label: 'Learn TypeScript' } },
  { id: 'task-5', position: { x: 700, y: 70  }, data: { label: 'Write project roadmap' } },
  // Q3 — Delegate
  { id: 'task-6', position: { x: 30,  y: 510 }, data: { label: 'Reply to non-urgent emails' } },
  { id: 'task-7', position: { x: 230, y: 510 }, data: { label: 'Attend optional standup' } },
  // Q4 — Eliminate
  { id: 'task-8', position: { x: 530, y: 510 }, data: { label: 'Scroll social media' } },
  { id: 'task-9', position: { x: 700, y: 510 }, data: { label: 'Reorganize desktop icons' } },
  { id: 'task-10',position: { x: 530, y: 580 }, data: { label: 'Watch auto-play videos' } },
].map(n => ({
  ...n,
  type: 'taskNode',
  connectable: false,
}));

export const initialNodes = [...quadrantNodes, ...taskNodes];
