export const openDocument = (ref: any, id?: string | null) => {
  ref?.current?.document
    ?.open({
      streamdocsId: id,
    })
    .then(() => {
      console.log('Document opened.')
    })
    .catch((error: { name: string; message: string }) => {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
    })

  hideMenu(ref)
}

const hideMenu = (ref: any) => {
  ref?.current?.viewer.setViewVisibility({
    view: 'TOOLBAR.LEFT',
    visibility: false,
  })

  ref?.current?.viewer.setViewVisibility({
    view: 'TOOLBAR.RIGHT',
    visibility: false,
  })
}

export const openStreamDocRedaction = async (ref: any, maskingId: string) => {
  await openViewer(ref, maskingId)
  await ref?.current?.viewer.openSideView({
    type: 'REDACTION',
  })
}

export const openViewer = async (ref: any, id: string) => {
  await ref?.current?.document?.open({
    streamdocsId: id,
  })
}

export const closeSideView = async (ref: any) => {
  await ref?.current?.viewer.closeSideView({
    type: 'LEFT',
  })
}
