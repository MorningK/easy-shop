import { ComponentProps } from "react";

export default function Price({
  price,
  ...props
}: { price: number } & ComponentProps<typeof span>) {
  return <span {...props}>RMB ￥ {(price / 100).toFixed(2)}</span>;
}
