import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/datasebase";
import HashPassword from "@/libs/utility/hashpassword";
import User from "@/libs/models/user.models";

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

  try {
    await connectToDatabase();

    if (await User.findOne({ email })) {
      return new NextResponse(
        JSON.stringify({ error: "Email already exist" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (await User.findOne({ username })) {
      return new NextResponse(
        JSON.stringify({ error: "Username has being used" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const user = await User.create({
      name,
      email,
      username,
      password: await HashPassword(password),
    });

    return new NextResponse(
      JSON.stringify({ message: "User created successfully", user }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ error: "An error occurred while signing you up" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
