
export default async function Home() {

  const reponse = await fetch('https://api.github.com/users/LuizFelipeOC');
  const user = await reponse.json();

  console.log(user)

  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  );
}
