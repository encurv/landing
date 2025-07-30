import { saveEmail } from "@/lib/api-requests";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) return;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return new Response(
      JSON.stringify({ message: "Please enter a valid email address." }),
      { status: 400 },
    );
  }

  const response = await saveEmail(email);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
