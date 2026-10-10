import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const requestHeaders = await headers();

    const session = await auth.api.getSession({
      headers: requestHeaders,
    });

    if (!session) {
      return NextResponse.json(
        { message: "আগে Sign In করো।" },
        { status: 401 },
      );
    }

    const body = await request.json();

    if (typeof body.name !== "string" || !body.name.trim()) {
      return NextResponse.json({ message: "সঠিক নাম লিখো।" }, { status: 400 });
    }

    await auth.api.updateUser({
      headers: requestHeaders,
      body: {
        name: body.name.trim(),
      },
    });

    return NextResponse.json({
      message: "Profile update হয়েছে।",
    });
  } catch (error) {
    console.error("Update profile error:", error);

    return NextResponse.json(
      { message: "Profile update করা যায়নি।" },
      { status: 500 },
    );
  }
}
