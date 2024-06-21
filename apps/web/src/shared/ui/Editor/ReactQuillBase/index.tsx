import ReactQuill from 'react-quill'
import dynamic from 'next/dynamic'
import { LegacyRef } from 'react'

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
  forwardedRef: LegacyRef<ReactQuill>
}

export const ReactQuillBase = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill')

    function QuillJS({ forwardedRef, ...props }: IWrappedComponent) {
      return <RQ ref={forwardedRef} {...props} />
    }

    return QuillJS
  },
  {
    ssr: false,
  },
)
