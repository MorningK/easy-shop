import { loadProducts, Product } from "@/lib/product";
import ProductCard from "@/component/product-card";

export const metadata = {
  title: "首页",
};

export default async function Home() {
  const products: Product[] = await loadProducts();

  return (
    <div className="flex gap-8 items-center flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
