import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

export const revalidate = 0;

export default function Home() {
  return (
    <main>
      <AddTodo />
      <TodoList />
    </main>
  );
}
