export const signOut = () => {
  return fetch('/api/logout', {
    method: 'POST',
  })
}
