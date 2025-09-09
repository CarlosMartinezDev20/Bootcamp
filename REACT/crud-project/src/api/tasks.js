const BASE = "http://localhost:3001/api/tasks";

export async function listTasks() {
  const r = await fetch(BASE);
  return r.json();
}

export async function createTask(payload) {
  const r = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return r.json();
}

export async function updateTask(id, payload) {
  const r = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return r.json();
}

export async function removeTask(id) {
  const r = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  return r.json();
}
