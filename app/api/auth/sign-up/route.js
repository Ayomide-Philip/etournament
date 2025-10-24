import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, username, password } = await request.json();
  console.log(name, email, username, password);

  if (!name || name.length < 5) {
    return new NextResponse(
      JSON.stringify({ error: "Name is required or less than 5 characters" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  if (!email || email.length < 5 || !email.includes("@")) {
    return new NextResponse(
      JSON.stringify({ error: "Email is required or less than 5 characters" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
