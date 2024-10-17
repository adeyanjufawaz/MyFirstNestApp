import getUser from "@/lib/getUser";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const user: Users = await getUser(userId);

  return {
    title: user.name,
    description: `This is ${user.name} page`,
  };
}




export default async function UserPage({ params: { userId } }: Params) {
  const user: Users = await getUser(userId);

  const content = (
    <div>
      <h2>{user.name}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sapiente
        nihil assumenda.
      </p>
      <p>{user.phone}</p>
    </div>
  );
  return <Suspense fallback={<h2>Loading..........</h2>}>{content}</Suspense>;
}
