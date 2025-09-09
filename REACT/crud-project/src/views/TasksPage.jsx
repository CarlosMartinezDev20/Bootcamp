import { useEffect, useState } from "react";
import { listTasks, createTask, updateTask, removeTask } from "../api/tasks.js";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function load() {
    try {
      setLoading(true);
      const data = await listTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch {
      setErr("No se pudieron cargar las tareas");
    } finally {
      setLoading(false);
    }
  }

  // agregar al FINAL
  async function add(payload) {
    try {
      const created = await createTask(payload);
      setTasks((p) => [...p, created]);
    } catch {
      setErr("No se pudo crear");
    }
  }

  async function save(task) {
    try {
      const updated = await updateTask(task.id, task);
      setTasks((p) => p.map((t) => (t.id === updated.id ? updated : t)));
    } catch {
      setErr("No se pudo actualizar");
    }
  }

  async function toggle(t) {
    await save({ ...t, completed: !Boolean(t.completed) });
  }

  async function del(id) {
    try {
      await removeTask(id);
      setTasks((p) => p.filter((t) => t.id !== id));
    } catch {
      setErr("No se pudo eliminar");
    }
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="app">
      <div className="shell">
        <header className="app-header">
          <h1 className="title">Gestor de Tareas</h1>
        </header>

        <main className="panels-grid">
          <section className="panel-card">
            <h2 className="panel-bar">Nueva tarea</h2>
            <TaskForm onAdd={add} />
            {err && <p className="error">{err}</p>}
          </section>

          <section className="panel-card">
            <h2 className="panel-bar">Tus tareas</h2>
            <TaskList
              tasks={tasks}
              loading={loading}
              onToggle={toggle}
              onDelete={del}
              onSave={save}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
