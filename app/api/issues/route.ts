import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validRequest = createIssueSchema.safeParse(body);
  if (!validRequest.success) {
    return NextResponse.json(validRequest.error.errors, { status: 400 });
  }

  const response = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(response, { status: 201 });
}
