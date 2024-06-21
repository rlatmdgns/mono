import { NextRequest, NextResponse } from 'next/server'
import { connectServerGoogleCalendar } from '@/features/apps/api/connectServerGoogleCalendar'
import { PAGE } from '@/shared/constants'

export async function GET(request: NextRequest) {
  const searchParams = new URLSearchParams(request.url)
  const code = searchParams.get('code')
  if (!searchParams || !code) {
    return NextResponse.redirect(new URL(PAGE.SETTINGS_APPS, request.url))
  }
  try {
    await connectServerGoogleCalendar(code)
    NextResponse.json({
      status: 'success',
      message: '구글 캘린더 연동 성공',
    })
    return NextResponse.redirect(new URL(PAGE.SETTINGS_APPS, request.url), {})
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
