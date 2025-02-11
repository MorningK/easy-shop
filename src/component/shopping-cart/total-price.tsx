"use client";

import { selectTotalPrice } from "@/lib/slice";
import { useAppSelector } from "@/lib/store";
import Price from "@/component/price";

export default function TotalPrice() {
  const totalPrice = useAppSelector(selectTotalPrice);

  return <Price price={totalPrice} />;
}
