import { data } from "@/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return NextResponse.json(await data.getUsers());
};
