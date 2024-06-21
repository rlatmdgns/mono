import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'

export const swapArrayItems = (list: RecruitMultipleItem[], index: number, toIndex: number) => {
  const items = [...list]
  let item = items[index]
  items[index] = items[toIndex]
  items[toIndex] = item
  return items
}

export const swapMoveUp = (items: RecruitMultipleItem[], index: number) => {
  const toIndex = index - 1
  return swapArrayItems(items, index, toIndex)
}

export const swapMoveDown = (items: RecruitMultipleItem[], index: number) => {
  const toIndex = index + 1
  return swapArrayItems(items, index, toIndex)
}
