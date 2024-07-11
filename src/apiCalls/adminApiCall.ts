import { DOMAIN } from "@/utils/contants"
import { Comment } from "@prisma/client"

// Get all comments
export async function getAllComments(token: string): Promise<Comment[]> {
  const response = await fetch(`${DOMAIN}/api/comments`, {
    headers: {
      Cookie: `jwt=${token}`,
    },
  })
  // console.log(response.json())
  if (!response.ok) {
    throw new Error("Failed to fetch comments")
  }

  return response.json()
}
