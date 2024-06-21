export function mouseDownDrag(onDragChange: (deltaX: number) => void) {
  return {
    onMouseDown: () => {
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const minWidth = 260
        const maxWidth = 650
        if (moveEvent.clientX < minWidth || moveEvent.clientX > maxWidth) {
          return
        }
        onDragChange(moveEvent.clientX)
      }
      const mouseUpHandler = () => {
        document.body.removeEventListener('mousemove', mouseMoveHandler)
      }

      document.body.addEventListener('mousemove', mouseMoveHandler)
      document.body.addEventListener('mouseup', mouseUpHandler, { once: true })
    },
  }
}
