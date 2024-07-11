import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export const GET = (request: NextRequest) => {
  try {
    cookies().delete("jwt")
    return NextResponse.json({ message: "logout" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
