import { Product } from '@/lib/product';
import Image from 'next/image';
import Price from '@/component/price';
import AddShoppingCart from './add-shopping-cart';

export default function ProductCard({ product }: { product: Product }) {
  const { name, description, price, sales, image } = product;
  return (
    <figure className="flex h-[444px] w-[264px] flex-col items-start gap-4 rounded-xl bg-slate-100 px-8 py-4">
      <Image
        className="rounded-md"
        src={image}
        width={200}
        height={200}
        alt={name}
      />
      <div className="text-lg font-bold">{name}</div>
      <div className="w-50 overflow-hidden text-ellipsis text-nowrap text-sm">
        {description}
      </div>
      <div className="text-sm">{sales}人评价</div>
      <Price price={price} className="text-red-600" />
      <AddShoppingCart product={product} />
    </figure>
  );
}
