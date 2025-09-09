import TaskItem from "./TaskItem";

export default function TaskList({ tasks, loading, onToggle, onDelete, onSave }) {
  if (loading) return <p className="muted">Cargando…</p>;
  if (!tasks.length) return <p className="muted">Sin tareas</p>;

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onToggle={() => onToggle(t)}
          onDelete={() => onDelete(t.id)}
          onSave={onSave}
        />
      ))}
    </ul>
  );
}
