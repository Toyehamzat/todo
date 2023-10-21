export default async function fetchTods() {
  const res = await fetch("http://127.0.0.1:3000/todos");

  const todos: Todo[] = await res.json();

  return todos;
}
