import jwt from "jsonwebtoken"
import { JWT } from "@/utils/types"
import { NextRequest } from "next/server"
import { serialize } from "cookie"
export const generateToken = (jwtPayload: JWT): string => {
  const secretKey = process.env.SECRET_KEY as string
  const token = jwt.sign(jwtPayload, secretKey, {
    expiresIn: "30d",
  })
  return token
}

//set cookie with Jwt
export const setCookie = (jwtPayload: JWT): string => {
  const token = generateToken(jwtPayload)
  const cookie = serialize("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })
  return cookie
}
