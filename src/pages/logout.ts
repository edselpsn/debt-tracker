import type { APIRoute } from 'astro'
import { signOut } from '../lib/auth'

export const POST: APIRoute = async () => {
  await signOut()

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/login'
    }
  })
}