import { NODE_ENV } from '@/shared/constants'
import serverSignIn from '@/services/auth/signIn/serverSignIn'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const user = await serverSignIn(body)
    const token = user?.token
    const enterpriseId = String(user?.enterprise?.enterprise_id)

    const cookieOptions = (name: string, value: string) => {
      const defaultOption = {
        name,
        value,
      }

      if (NODE_ENV === 'production') {
        return {
          ...defaultOption,
          domain: '.steadhr.com',
        }
      }
      return defaultOption
    }

    const response = new NextResponse(
      JSON.stringify({
        status: 'success',
        ...user,
      }),
      {
        status: 200,
      },
    )

    await Promise.all([
      response.cookies.set(cookieOptions('token', token)),
      response.cookies.set(cookieOptions('enterpriseId', enterpriseId)),
    ])
    return response
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: error.message,
        }),
      )
    }
  }
}
