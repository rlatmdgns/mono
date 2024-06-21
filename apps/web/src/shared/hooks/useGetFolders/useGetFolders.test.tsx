import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetFolders } from './useGetFolders'
import { Wrapper } from '../../../interface/query'
import { folderMockData } from '../../../mocks/model'

describe('useGetFolder TEST', () => {
  it('폴더 조회 API 성공', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: Wrapper) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(useGetFolders, { wrapper })

    expect(result.current.folder_list).toBeUndefined()

    await waitFor(() => {
      return expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.folder_list).toEqual(folderMockData.folder_list)
  })

  it('폴더 조회 API 실패', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: Wrapper) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(useGetFolders, { wrapper })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(false)
    })

    expect(result.current.isSuccess).toBe(false)
  })
})
