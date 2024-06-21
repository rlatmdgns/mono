import { CustomNonFolder, Folder } from '@/interface/sidebar'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const noneFoldersAtom = atom<CustomNonFolder>({
  key: 'noneFoldersAtom',
  default: {
    folder_id: 'null',
    postings: [],
  },
})

export const foldersAtom = atom<Folder[]>({
  key: 'foldersAtom',
  default: [],
})

export const openFoldersAtom = atom<string[]>({
  key: 'openFoldersAtom',
  default: [],
})

const { persistAtom } = recoilPersist()
export const sidebarWidthAtom = atom({
  key: 'sidebarWidthAtom',
  default: 260,
  effects_UNSTABLE: [persistAtom],
})
