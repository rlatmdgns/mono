export const getPopoverPosition = (containerRef: HTMLDivElement | null) => {
  if (!containerRef) {
    return {
      top: 0,
      left: 0,
    }
  }

  const {
    width: containerWidth,
    y: containerOffsetTop,
    x: containerOffsetLeft,
  } = containerRef.getBoundingClientRect()
  const popoverWidth = 240
  const gap = 12

  return {
    top: containerOffsetTop - gap,
    left: containerOffsetLeft - (popoverWidth - containerWidth),
  }
}
