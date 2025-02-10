import { Product } from "@/lib/product";
import Image from "next/image";

export default function ProductCard({ product} : { product: Product }) {
    const { id, name, description, price, sales, image } = product;
    return (
        <figure className="flex flex-col items-start bg-slate-100 px-8 py-4 rounded-xl w-[264px] h-[444px] gap-4">
            <Image className='rounded-md' src={image} width={200} height={200} alt={name}  />
            <div className="font-bold text-lg ">{name}</div>
            <div className="text-sm overflow-hidden text-ellipsis text-nowrap w-50">{description}</div>
            <div className="text-red-600">RMB ￥{(price/100).toFixed(2)}</div>
            <div className="text-sm">{sales}人评价</div>
            <button className="w-full rounded bg-blue-500 text-white py-2">加入购物车</button>
          </figure>
    )
}