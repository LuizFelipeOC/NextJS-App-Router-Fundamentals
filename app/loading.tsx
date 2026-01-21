export default async function Loading() {

    new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <h1>Loading...</h1>
  );
}