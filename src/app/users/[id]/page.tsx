/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Form } from "./Form";

export default async function User({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const user = await fetch("http://localhost:3000/api/users/" + params.id).then(
    (res) => res.json()
  );

  if (!user) {
    return 404;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>User #{params.id}</h1>
        <Form user={user} />
        <Link href="/" className="text-cyan-700">
          Go back
        </Link>
      </main>
    </div>
  );
}
