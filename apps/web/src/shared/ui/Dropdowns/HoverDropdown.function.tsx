export const getDropdownDirection = (containerRef: HTMLDivElement | null, direction: string) => {
  if (!containerRef) {
    return {
      top: 0,
      left: 0,
      containContainerLeft: 0,
    }
  }

  const {
    width: containerWidth,
    height: containerHeight,
    y: containerOffsetTop,
    x: containerOffsetLeft,
  } = containerRef.getBoundingClientRect()
  const GAP = 8

  switch (direction) {
    case 'left':
      return {
        top: containerOffsetTop + containerHeight + GAP,
        left: containerOffsetLeft,
      }
    default:
      return {
        top: containerOffsetTop + containerHeight + GAP,
        containContainerLeft: containerOffsetLeft + containerWidth,
      }
  }
}

export const getTransformXRight = (containContainerLeft?: number) => {
  if (!containContainerLeft) return '0'
  return `calc(${containContainerLeft}px - 100%)`
}
