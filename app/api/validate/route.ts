// app/api/check-auth/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return NextResponse.json({ isAuthenticated: !!token });
}