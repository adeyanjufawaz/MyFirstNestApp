
import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";
import { Suspense } from "react";

export default async function About() {
  const users: Users[] = await getAllUsers();

  const content = (
    <div>
      <br />
      {users ? users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <br />
        </Link>
      )) : <h2>Result Not Found</h2> }
    </div>
  );

  return (
    <>
      <h2>Elite</h2>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <h2>Now</h2>
      <Suspense fallback={<h2>Loading..........</h2>}>{content}</Suspense>;
    </>
  );
}

export async function generateStaticParams() {
  const users: Users[] = await getAllUsers();

  return users.map((user) => {
    userId: user.id.toString();
  });
}
