import { NextResponse } from "next/server";
import { connect } from "@/backend/db";
import User from "@/models/userModel";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connect(); 
    try {
    
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    } 

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}