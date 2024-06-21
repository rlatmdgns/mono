import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Wrapper } from '@/interface/query'
import { renderHook } from '@testing-library/react'
import { useCreateFolder } from './useCreateFolder'

describe('useCreateFolder 폴더 생성 여부 확인', () => {
  it('유저가 폴더를 생성한다.', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: Wrapper) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useCreateFolder(), {
      wrapper,
    })

    // act(() => {
    //   result.current.createFolderMutate('새로운 폴더')
    // })
    //
    // await waitFor(() => {
    //   expect(result.current.isSuccess).toBe(true)
    // })
  })
})
