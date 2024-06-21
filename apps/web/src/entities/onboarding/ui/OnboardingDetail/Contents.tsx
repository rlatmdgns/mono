import DOMPurify from 'dompurify'

interface ContentsProps {
  type: string
  contents: string
}
export const Contents = ({ type, contents }: ContentsProps) => {
  if (type === 'survey') return null

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(contents),
      }}
    ></div>
  )
}
