export const BASE_URL =
  process.env.NEXT_PUBLIC_DEV_HOST || 'https://stead-api-develop.steadhr.com/api/v1'

export const NEST_URL = process.env.NEXT_PUBLIC_DEV_NEST_HOST
export const POST_CODE = process.env.NEXT_PUBLIC_POSTCODE

export const KAKAO_MAP_URL = `${process.env.NEXT_PUBLIC_KAKAO_MAP}?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`

export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV
export const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN
