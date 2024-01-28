import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { IssueSchema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/auth/AuthOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(AuthOptions);
  const body = await request.json();
  const validRequest = IssueSchema.safeParse(body);

  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  if (!validRequest.success) {
    return NextResponse.json(validRequest.error.format(), { status: 400 });
  }

  const response = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(response, { status: 201 });
}
