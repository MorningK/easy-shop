"use client";

import { Product } from "@/lib/product";
import { addToShoppingCart } from "@/lib/slice";
import { useAppDispatch } from "@/lib/store";

export default function AddShoppingCart({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    console.debug("add", product);
    dispatch(addToShoppingCart(product));
  };

  return (
    <button
      className="w-full rounded bg-blue-500 text-white py-2"
      onClick={handleClick}
    >
      加入购物车
    </button>
  );
}
