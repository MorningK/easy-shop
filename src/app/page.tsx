import Image from "next/image";
import { Product } from "@/lib/product";
import ProductCard from "@/component/product-card";

export const metadata = {
  title: '首页'
}

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();
  console.log("product", response, products);

  return (
    <div className="flex gap-8 items-center flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
}
