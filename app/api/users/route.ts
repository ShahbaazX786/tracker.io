import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userList = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(userList);
}
