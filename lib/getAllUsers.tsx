export default async function getAllUsers(): Promise<Users[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 30 },
  });

  return res.json();
}
