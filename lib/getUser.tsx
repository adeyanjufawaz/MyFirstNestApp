

export default async function getUser(userId:string): Promise<Users> {
   const res = await fetch(
     `https://jsonplaceholder.typicode.com/users/${userId}`
   );

   return res.json();
}

