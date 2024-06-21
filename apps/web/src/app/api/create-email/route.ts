import serverCreateEmail from '@/services/auth/signUp/createEmail/serverCreateEmail'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    await serverCreateEmail(body)
    return NextResponse.json({
      status: 'success',
      message: '기업 이메일 생성 성공',
    })
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
