export default async function fetchTods(id: string) {
  const res = await fetch(`http://127.0.0.1:3000/todos${id}`);

  if (!res.ok) return undefined;

  const todo: Todo = await res.json();

  return todo;
}
