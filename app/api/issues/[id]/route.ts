import { AuthOptions } from "@/app/auth/AuthOptions";
import { PatchIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const validateReq = PatchIssueSchema.safeParse(body);
  const session = await getServerSession(AuthOptions);

  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  if (!validateReq.success) {
    return NextResponse.json(validateReq.error.format(), { status: 400 });
  }

  const { title, description, assignedToUserId } = body;
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({ where: { id: assignedToUserId } });
    if(!user){
      return NextResponse.json({error:'Invalid User'}, {status:404});
    }
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    return NextResponse.json({ error: "Invalid issue" }, { status: 400 });
  }

  const result = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
      assignedToUserId,
    },
  });
  return NextResponse.json(result);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(AuthOptions);

  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    return NextResponse.json(
      { error: "Invalid Issue - This issue might not exist" },
      { status: 404 }
    );
  }

  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json("Issue deleted successfully");
}
