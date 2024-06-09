import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export type Home = {
  id: number;
  name: string;
  description: string;
};

export async function GET(request: Request) {
  const { rows } = await sql<Home>`
    SELECT * FROM homes
  `;

  return NextResponse.json({ data: rows });
}
