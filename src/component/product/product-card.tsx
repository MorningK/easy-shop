import { Product } from "@/lib/product";
import Image from "next/image";
import Price from "@/component/price";
import AddShoppingCart from "./add-shopping-cart";

export default function ProductCard({ product }: { product: Product }) {
  const { name, description, price, sales, image } = product;
  return (
    <figure className="flex flex-col items-start bg-slate-100 px-8 py-4 rounded-xl w-[264px] h-[444px] gap-4">
      <Image
        className="rounded-md"
        src={image}
        width={200}
        height={200}
        alt={name}
      />
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm overflow-hidden text-ellipsis text-nowrap w-50">
        {description}
      </div>
      <div className="text-sm">{sales}人评价</div>
      <Price price={price} className="text-red-600" />
      <AddShoppingCart product={product} />
    </figure>
  );
}
