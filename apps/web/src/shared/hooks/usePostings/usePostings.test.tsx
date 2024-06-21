import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import { describe } from 'node:test'
import { API_URL, BASE_URL } from '../../constants'
import { Wrapper } from '../../../interface/query'
import { usePostings } from './usePostings'

describe('usePostings TEST', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  const posting = {
    activate_state: false,
    close_state: false,
    posting_id: 0,
    posting_member: false,
    posting_title: '공고',
    sort: 0,
    posting_color: 'red',
  }
  const mockResponse = {
    folder_list: [
      { folder_id: '1', folder_name: 'Folder 1' },
      {
        folder_id: '2',
        folder_name: 'Folder 2',
        postings: [posting],
      },
    ],
    none_folder: [posting],
    success: true,
  }

  const URL = `${BASE_URL}${API_URL.POSTINGS}`

  it('공고 조회 API 성공', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: Wrapper) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    fetchMock.get(URL, {
      status: 200,
      body: mockResponse,
    })

    const { result } = renderHook(() => usePostings(mockResponse), { wrapper })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data).toEqual(mockResponse)
  })

  it('공고 조회 API 실패', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: Wrapper) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    fetchMock.get(URL, {
      status: 500,
      body: { message: 'Internal Server Error' },
    })

    const { result } = renderHook(usePostings, { wrapper })

    expect(result.current.data).toBeUndefined()
    expect(result.current.isSuccess).toBe(false)
  })
})
