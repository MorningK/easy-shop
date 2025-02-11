import { loadProducts, Product } from '@/lib/product';
import ProductCard from '@/component/product/product-card';

export const metadata = {
  title: '首页',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products: Product[] = await loadProducts();

  return (
    <div className="flex flex-wrap items-center gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
