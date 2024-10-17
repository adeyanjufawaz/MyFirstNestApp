
import Link from "next/link";
export const metadata = {
  title: "Diddy",
  description: "Wecome to elite Tv",
};


export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link className="block w-52 bg-green-500 py-3 px-7" href="/users">
        Users Page
      </Link>
    </div>
  );
}
