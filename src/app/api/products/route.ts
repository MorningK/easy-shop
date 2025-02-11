import { dataSource } from '@/lib/product';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return Response.json(dataSource);
}
