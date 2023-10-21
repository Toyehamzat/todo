import Todo from "@/app/component/Todo";
import fetchtodo from "@/lib/fetchtodo";
import { notFound } from "next/navigation";

export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params: { id } }: Props) {
  const todo = await fetchtodo(id);

  if (!todo) notFound();

  return <Todo {...todo} />;
}
