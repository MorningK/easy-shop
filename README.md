# easy-shop

An easy shop website

## 运行环境

1. 需要[NodeJs 18.18](https://nodejs.org/) 以上

```bash
node -v
```

2. 检查终端是否有`corepack`工具，node版本符合应该是都会自带的，但是如果没有的话，需要重新安装

```bash
corepack -v
```

3. 安装指定版本的yarn工具

```bash
corepack install
```

4. 安装项目依赖

```bash
yarn install
```

5. 运行本地服务

```bash
yarn dev
```

6. 打包项目并启动

```bash
yarn build
yarn start
```

7. 本机运行地址 [http://localhost:3000](http://localhost:3000)

## 项目依赖

1. `react` `react-dom` 这是一个使用reactjs编写的应用
2. `next` 使用了nextjs app router作为项目的主要框架
3. `@reduxjs/toolkit` `react-redux` 使用redux作为状态管理工具
4. `redux-persist` `localforage` 实现使用IndexedDB作为缓存数据持久化
5. `sonner` 轻提示组件
6. `mockjs` 为api返回模拟数据提供帮助
7. `typescript` `@types/*` 这是一个使用typescript编写的应用
8. `eslint` `prettier` 对代码进行规范化的校验
9. `husky` `lint-staged` 对提交的代码进行自动化的处理和检查
10. `tailwindcss` `postcss` 提供原子化和语义化的样式

## 项目结构

```
src
├── app
│   ├── api
│   │   └── products
│   │       └── route.ts                    获取产品列表的远程接口
│   ├── favicon.ico
│   ├── globals.css                         配置全局样式，主要包括了tailwind的配置
│   ├── layout.tsx                          整个应用的基本布局，添加了顶部的导航栏，还配置了redux的provider和persist gate
│   ├── page.tsx                            应用的首页，展示所有的产品列表
│   └── shopping-cart
│       └── page.tsx                        购物车页面，包括了所有加入购物车的产品，并可以进行对应的管理
├── component
│   ├── price.tsx                           用于统一展示价格的组件
│   ├── product
│   │   ├── add-shopping-cart.tsx           首页中点击加入购物车的按钮组件
│   │   └── product-card.tsx                首页中单个产品的卡片组件
│   ├── shopping-cart
│   │   ├── product-table.tsx               购物车中所有产品的表格
│   │   ├── setllement-price.tsx            展示计算优惠后结算价格的组件
│   │   └── total-price.tsx                 展示初始价格的组件
│   └── store-provider.tsx                  配置redux的store和persist的组件
└── lib
    ├── features
    │   └── product
    │       └── slice.ts                    处理购物车中产品的状态
    ├── persist.ts                          定义了redux-persist的store和persistor
    ├── product.ts                          定义了产品拥有的字段，并按照类型创建模拟数据
    └── store.ts                            定义了redux中的reducer、store以及声明了具体类型的hooks
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
