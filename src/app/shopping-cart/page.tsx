import Price from "@/component/price";
import { loadProducts } from "@/lib/product";
import Image from "next/image";

export const metadata = {
  title: "购物车",
};

export default async function Page() {
  // TODO: 获取加入购物车的产品列表
  const products = await loadProducts();

  return (
    <div className="flex items-start gap-16">
      <table className="flex-1">
        <thead className="font-bold border-b p-2 border-slate-800 text-slate-950">
          <tr>
            <td>商品</td>
            <td>数量</td>
            <td>单价</td>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, price, image }) => (
            <tr key={id} className="border-b ">
              <td className="flex items-center gap-2 py-2">
                <input type="checkbox" name="choosen" />
                <Image
                  className="rounded"
                  src={image}
                  width={100}
                  height={100}
                  alt={name}
                />
                <div className="flex flex-col items-start justify-between self-stretch">
                  <span className="font-bold text-lg">{name}</span>
                  <button className="text-sm text-slate-400">删除</button>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  className="border rounded py-1"
                  defaultValue={1}
                  min={1}
                />
              </td>
              <td>
                <Price price={price} className="text-red-600" />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="sticky bottom-0 bg-white py-4 w-full">
          <div className="py-2 flex gap-8 border-b w-full">
            <label>
              <input type="checkbox" name="choosen" /> 全选
            </label>
            <span>已选1件商品</span>
          </div>
          <div className="flex justify-between px-8 py-2 items-center w-full">
            <span>登录注册查看更多优惠</span>

            <button className="text-white bg-black rounded py-2 px-4">
              登录 | 注册
            </button>
          </div>
        </tfoot>
      </table>
      <div className="sticky top-20 bg-gray-100 rounded-md p-4 min-w-[300px] flex flex-col gap-4">
        <div className="pb-4 font-bold border-b border-slate-800">结算详情</div>
        <div className="flex justify-between items-center">
          <span className="font-bold">小计</span>
          <Price price={10000} />
        </div>
        <div className="font-bold">优惠券</div>
        <div className="flex pb-4 border-b border-slate-400">
          <input className="round-sm" placeholder="请输入优惠码" />
          <button className="px-4 py-1 text-white bg-black">提交</button>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">合计（含税）</span>
          <Price price={10000} className="text-red-600 font-bold" />
        </div>
        <button className="w-full py-2 bg-black text-white rounded mt-8">
          结算
        </button>
      </div>
    </div>
  );
}
