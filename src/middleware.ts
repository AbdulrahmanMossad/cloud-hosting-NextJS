import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
  //   const userToken = request.headers.get("authToken") as string
  const userToken = request.cookies.get("jwt")
  const token = userToken?.value as string
  // console.log(token)
  if (!token) {
    return NextResponse.json(
      { message: "Not authorized message from middleware" },
      { status: 401 }
    )
  }
}
//apply middleware on only these routes
export const config = {
  matcher: ["/api/user/profile/:path*"],
}
