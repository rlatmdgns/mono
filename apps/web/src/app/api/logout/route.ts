import { NODE_ENV } from '@/shared/constants'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const domain = NODE_ENV === 'production' ? '.steadhr.com' : 'localhost'

    cookies().set('token', '', { maxAge: 0, domain })
    cookies().set('enterpriseId', '', { maxAge: 0, domain })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
