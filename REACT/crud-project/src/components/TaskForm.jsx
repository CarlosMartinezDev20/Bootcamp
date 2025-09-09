import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    await onAdd({
      title: title.trim(),
      description: description.trim(),
      completed: false,
    });
    setTitle("");
    setDescription("");
  }

  return (
    <form className="su-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="su-input"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="su-input"
        placeholder="Descripción (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="su-btn" type="submit">Agregar</button>
    </form>
  );
}
