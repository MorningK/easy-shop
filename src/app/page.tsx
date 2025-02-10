import Image from "next/image";
import { Product } from "@/lib/product";
import ProductCard from "@/component/product-card";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();
  console.log("product", response, products);

  return (
    <main className="flex p-16  gap-8 items-center flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
  );
}
