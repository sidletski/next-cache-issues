import { data } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const userId = parseInt(params.id, 10);
  return NextResponse.json(await data.getUserById(userId));
};

export const PUT = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const userId = parseInt(params.id, 10);
  const user = await req.json();
  return NextResponse.json(await data.updateUser(userId, user));
};
