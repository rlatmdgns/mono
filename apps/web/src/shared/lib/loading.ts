export const loading = {
  pending: () => {
    const loading = document.getElementById('loading') as HTMLElement
    loading.classList.add('is-loading')
  },
  resolved: () => {
    const isServer = typeof window === 'undefined'
    if (!isServer) {
      setTimeout(() => {
        document.getElementById('loading')?.classList.remove('is-loading')
      }, 400)
    }
  },
}
