import ProductTable from '@/component/shopping-cart/product-table';
import SetllementPrice from '@/component/shopping-cart/setllement-price';
import TotalPrice from '@/component/shopping-cart/total-price';

export const metadata = {
  title: '购物车',
};

export default async function Page() {
  return (
    <div className="flex items-start gap-16">
      <table className="flex-1">
        <thead className="border-b border-slate-800 p-2 font-bold text-slate-950">
          <tr>
            <th align="left">商品</th>
            <th align="left">数量</th>
            <th align="left">单价</th>
          </tr>
        </thead>
        <ProductTable />
      </table>
      <div className="sticky top-20 flex min-w-[300px] flex-col gap-4 rounded-md bg-gray-100 p-4">
        <div className="border-b border-slate-800 pb-4 font-bold">结算详情</div>
        <div className="flex items-center justify-between">
          <span className="font-bold">小计</span>
          <TotalPrice />
        </div>
        <div className="font-bold">优惠券</div>
        <div className="flex border-b border-slate-400 pb-4">
          <input className="round-sm" placeholder="请输入优惠码" />
          <button className="bg-black px-4 py-1 text-white">提交</button>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">合计（含税）</span>
          <SetllementPrice />
        </div>
        <button className="mt-8 w-full rounded bg-black py-2 text-white">
          结算
        </button>
      </div>
    </div>
  );
}
