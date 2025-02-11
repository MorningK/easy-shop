'use client';

import { Product } from '@/lib/product';
import { addToShoppingCart } from '@/lib/features/product/slice';
import { useAppDispatch } from '@/lib/store';

export default function AddShoppingCart({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    console.debug('add', product);
    dispatch(addToShoppingCart(product));
  };

  return (
    <button
      className="w-full rounded bg-blue-500 py-2 text-white"
      onClick={handleClick}
    >
      加入购物车
    </button>
  );
}
