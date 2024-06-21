export type NextGuide = {
  id: string
  title: string
}

export type Guides = NextGuide & {
  next?: NextGuide
  images?: string[]
}
