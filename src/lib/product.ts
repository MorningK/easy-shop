import { mock } from "mockjs";

const productTemplate = {
  "id|+1": 1, // 生成唯一的产品编号
  "name|1": [
    "口红",
    "眼影盘",
    "粉底液",
    "腮红",
    "眉笔",
    "睫毛膏",
    "遮瑕膏",
    "高光",
    "定妆喷雾",
    "卸妆水",
    "精华液",
    "面霜",
    "爽肤水",
    "面膜",
    "洁面乳",
    "护手霜",
    "香水",
    "发膜",
    "洗发水",
    "护发素",
  ],
  description: "@cparagraph(1)", // 随机生成一段描述
  "price|1000-5000": 1, // 随机生成价格，范围 10-500
  "sales|0-1000": 1, // 随机生成购买量，范围 0-1000
  image: "@image(200x200)", // 随机生成图片
};

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sales: number;
  image: string;
}

export const dataSource: Product[] = mock({
  "list|10-20": [productTemplate],
}).list;

const endpoint = process.env.NEXT_PUBLIC_EDNPOINT;

export const loadProducts = async () => {
  const response = await fetch(endpoint + "/api/products");
  const products: Product[] = await response.json();
  return products;
};
