import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validRequest = createIssueSchema.safeParse(body);
  if (!validRequest.success) {
    return NextResponse.json(validRequest.error.format(), { status: 400 });
  }

  const response = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(response, { status: 201 });
}
