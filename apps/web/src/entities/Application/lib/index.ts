export const getHostName = (url: string | null) => {
  if (!url) return ''
  return url.substring(url.indexOf('//') + 2, url.lastIndexOf('/'))
}
