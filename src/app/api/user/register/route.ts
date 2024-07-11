// @method  POST
// @route  ~/api/users
// @desc   sign up
// @access public

import { RegisterDto } from "@/utils/dto"
import { registerValidation } from "@/utils/validator"
import { User } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/utils/db"
import bcrypt from "bcryptjs"
import { generateToken, setCookie } from "@/utils/generateToken"
import { JWT } from "@/utils/types"
export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as RegisterDto
    console.log(body)
    //aplly validation on body
    const validation = registerValidation.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      )
    }
    //check if user already exist
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (user) {
      return NextResponse.json(
        { message: "User already exist" },
        { status: 400 }
      )
    }
    //hashing password
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        usename: body.usename,
        password: hashedPassword,
      },
      select: {
        usename: true,
        id: true,
        isAdmin: true,
      },
    })
    //create token
    const jwtPayload: JWT = {
      id: newUser.id,
      isAdmin: newUser.isAdmin,
      usename: newUser.usename,
    }
    // generate JWT token
    // const token = generateToken(jwtPayload)
    const cookie = setCookie(jwtPayload)
    return NextResponse.json(
      { ...newUser },
      { status: 201, headers: {"Set-Cookie": cookie } }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    )
  }
}
