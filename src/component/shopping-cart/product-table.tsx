"use client";

import {
  changeAllSelected,
  changeAmount,
  changeSelected,
  removeFromShoppingCart,
  selectCount,
  selectProductsWithSelected,
} from "@/lib/features/product/slice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import Image from "next/image";
import Price from "@/component/price";

export default function ProductTable() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsWithSelected);
  const count = useAppSelector(selectCount);

  return (
    <>
      <tbody>
        {products.map(({ id, name, price, image, selected, amount }) => (
          <tr key={id} className="border-b ">
            <td className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                name="choosen"
                checked={selected}
                onChange={(event) =>
                  dispatch(
                    changeSelected({
                      id,
                      selected: event.target.checked,
                    }),
                  )
                }
              />
              <Image
                className="rounded"
                src={image}
                width={100}
                height={100}
                alt={name}
              />
              <div className="flex flex-col items-start justify-between self-stretch">
                <span className="font-bold text-lg">{name}</span>
                <button
                  className="text-sm text-slate-400"
                  onClick={() => dispatch(removeFromShoppingCart(id))}
                >
                  删除
                </button>
              </div>
            </td>
            <td>
              <input
                type="number"
                className="border rounded py-1"
                value={amount}
                onChange={(event) =>
                  dispatch(
                    changeAmount({
                      id,
                      amount: Number(event.target.value),
                    }),
                  )
                }
                min={1}
              />
            </td>
            <td>
              <Price price={price} className="text-red-600" />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="sticky bottom-0 bg-white/80 backdrop-blur-xl">
        <tr className="border-b">
          <td colSpan={3} className="py-2 flex gap-8">
            <label className="flex gap-2">
              <input
                type="checkbox"
                name="choosen"
                checked={count === products.length && count > 0}
                onChange={(event) =>
                  dispatch(changeAllSelected(event.target.checked))
                }
              />
              全选
            </label>
            <span>已选{count}件商品</span>
          </td>
        </tr>
        <tr>
          <td
            colSpan={3}
            className="flex justify-between px-8 py-2 items-center"
          >
            <span>登录注册查看更多优惠</span>

            <button className="text-white bg-black rounded py-2 px-4">
              登录 | 注册
            </button>
          </td>
        </tr>
      </tfoot>
    </>
  );
}
