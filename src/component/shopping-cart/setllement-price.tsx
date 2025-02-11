"use client";

import { selectTotalPrice } from "@/lib/features/product/slice";
import { useAppSelector } from "@/lib/store";
import Price from "@/component/price";

export default function SetllementPrice() {
  const totalPrice = useAppSelector(selectTotalPrice);

  return <Price price={totalPrice} className="text-red-600 font-bold" />;
}
