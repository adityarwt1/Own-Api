import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    /// your db action
    return NextResponse.json(
      {
        title: "This is the title",
        description: "This is the description",
        provider: "Aditya Rawat",
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST , PUT, DELETE",
          "Access-Control-Allow-Headers": "Content-Type , Authorization",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Issue" },
      { status: 500 }
    ); 
  }
}
