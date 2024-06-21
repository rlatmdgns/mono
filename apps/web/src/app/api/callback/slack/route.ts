import { NextRequest, NextResponse } from 'next/server'
import { PAGE } from '@/shared/constants'
import { connectServerSlack } from '@/features/apps/api/connectServerSlack'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url?.searchParams?.get('code')
  if (!code) {
    return NextResponse.redirect(new URL(PAGE.SETTINGS_APPS, request.url))
  }
  try {
    await connectServerSlack(code)
    return NextResponse.redirect(new URL(PAGE.SETTINGS_APPS, request.url))
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
