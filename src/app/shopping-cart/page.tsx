import ProductTable from "@/component/shopping-cart/product-table";
import SetllementPrice from "@/component/shopping-cart/setllement-price";
import TotalPrice from "@/component/shopping-cart/total-price";

export const metadata = {
  title: "购物车",
};

export default async function Page() {
  return (
    <div className="flex items-start gap-16">
      <table className="flex-1">
        <thead className="font-bold border-b p-2 border-slate-800 text-slate-950">
          <tr>
            <th align="left">商品</th>
            <th align="left">数量</th>
            <th align="left">单价</th>
          </tr>
        </thead>
        <ProductTable />
      </table>
      <div className="sticky top-20 bg-gray-100 rounded-md p-4 min-w-[300px] flex flex-col gap-4">
        <div className="pb-4 font-bold border-b border-slate-800">结算详情</div>
        <div className="flex justify-between items-center">
          <span className="font-bold">小计</span>
          <TotalPrice />
        </div>
        <div className="font-bold">优惠券</div>
        <div className="flex pb-4 border-b border-slate-400">
          <input className="round-sm" placeholder="请输入优惠码" />
          <button className="px-4 py-1 text-white bg-black">提交</button>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">合计（含税）</span>
          <SetllementPrice />
        </div>
        <button className="w-full py-2 bg-black text-white rounded mt-8">
          结算
        </button>
      </div>
    </div>
  );
}
