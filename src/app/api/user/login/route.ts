import { LoginDto } from "@/utils/dto"
import { loginValidation } from "@/utils/validator"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/utils/db"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT } from "@/utils/types"
import { generateToken, setCookie } from "@/utils/generateToken"

export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as LoginDto
    // validate the request
    const validation = loginValidation.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      )
    }
    //check if user email exists or not
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (!user) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 404 }
      )
    }
    // check if password matches
    const isMatchedPasswords = await bcrypt.compare(
      body.password,
      user.password
    )
    if (!isMatchedPasswords) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 404 }
      )
    }
    const jwtPayload: JWT = {
      id: user.id,
      isAdmin: user.isAdmin,
      usename: user.usename,
    }
    // generate JWT token
    // const token = generateToken(jwtPayload)
    const cookie = setCookie(jwtPayload)
    return NextResponse.json(
      { message: "authenticated user" },
      { status: 200, headers: { "Set-Cookie": cookie } }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
