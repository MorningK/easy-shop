import { dataSource } from "@/lib/product";
import { NextResponse } from "next/server";

export function GET() {
  // 随机生成 10-20 条数据
  return Response.json(dataSource);
}
