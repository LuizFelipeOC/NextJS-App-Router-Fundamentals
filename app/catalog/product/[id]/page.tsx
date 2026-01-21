interface ProductProps {
  params: Promise<{
    id: string;
  }>;
 }

export default async function Product(props: ProductProps) {
  const params = await props.params;
  const id = params.id;

  return (
   <h1>Hello Product {id}</h1>
  );
}
