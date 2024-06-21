export type HandleAppendReceive = (
  type: 'ATS' | 'OMS',
  email: string,
  id?: string | number,
  name?: string,
  profile?: string,
) => void
export type HandleRemoveReceive = (index: number) => void
