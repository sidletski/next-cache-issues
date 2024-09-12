/* eslint-disable @next/next/no-img-element */
import { User } from "@/db";
import { unstable_noStore } from "next/cache";
import Link from "next/link";

export default async function Home() {
  unstable_noStore();
  const users = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  }).then((res) => res.json() as Promise<User[]>);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Users list</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >
              <img
                src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${user.id}`}
                alt={user.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <Link className="text-cyan-700" href={`/users/${user.id}`}>
                  Edit user
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
