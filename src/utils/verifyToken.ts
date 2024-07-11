import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"
import { JWT } from "./types"

// Verify Token For API End Point
export function verifyToken(request: NextRequest): JWT | null {
  try {
    const jwtToken = request.cookies.get("jwt")
    const token = jwtToken?.value as string

    if (!token) return null

    const privateKey = process.env.SECRET_KEY as string
    const userPayload = jwt.verify(token, privateKey) as JWT
    console.log(userPayload)
    return userPayload
  } catch (error) {
    return null
  }
}

// Verify Token For Page
export function verifyTokenForPage(token: string): JWT | null {
  try {
    const privateKey = process.env.SECRET_KEY as string
    const userPayload = jwt.verify(token, privateKey) as JWT
    if (!userPayload) return null

    return userPayload
  } catch (error) {
    return null
  }
}
