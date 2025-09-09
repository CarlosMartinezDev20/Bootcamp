import { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onSave }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(task.title ?? "");
  const [description, setDescription] = useState(task.description ?? "");

  async function handleSave() {
    await onSave({ ...task, title: title.trim(), description: description.trim() });
    setEdit(false);
  }

  return (
    <li className={`task-card ${task.completed ? "done" : ""}`}>
      <div className="task-main">
        <span className="task-id">#{task.id}</span>
        <input type="checkbox" checked={Boolean(task.completed)} onChange={onToggle} />
        {edit ? (
          <div className="edit-fields">
            <input className="su-input" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className="su-input" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        ) : (
          <div className="task-texts">
            <span className="task-title">{task.title}</span>
            {task.description ? <span className="task-desc">{task.description}</span> : null}
          </div>
        )}
      </div>

      <div className="task-actions">
        {edit ? (
          <>
            <button className="btn ghost" onClick={() => setEdit(false)}>Cancelar</button>
            <button className="btn" onClick={handleSave}>Guardar</button>
          </>
        ) : (
          <>
            <button className="btn ghost" onClick={() => setEdit(true)}>Editar</button>
            <button className="btn danger" onClick={onDelete}>Eliminar</button>
          </>
        )}
      </div>
    </li>
  );
}
