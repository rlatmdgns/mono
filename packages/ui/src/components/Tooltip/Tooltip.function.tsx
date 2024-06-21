export const getContentSize = (content: string) => {
  const PADDING_X = 24
  const PADDING_Y = 20
  const tempSpan = document.createElement('span')
  tempSpan.style.fontSize = '12px'
  tempSpan.style.lineHeight = '18px'
  tempSpan.style.letterSpacing = '-0.01em'
  tempSpan.innerHTML = content
  document.body.appendChild(tempSpan)
  const width = tempSpan.offsetWidth + PADDING_X
  const height = tempSpan.offsetHeight + PADDING_Y
  document.body.removeChild(tempSpan)
  return { width, height }
}

export const getTooltipDirection = (
  containerRef: HTMLDivElement | null,
  size: { width: number; height: number },
  direction: string,
) => {
  const ARROW_SIZE = 8
  if (!containerRef) {
    return {
      top: 0,
      left: 0,
    }
  }

  const {
    width: containerWidth,
    height: containerHeight,
    y: containerOffsetTop,
    x: containerOffsetLeft,
  } = containerRef.getBoundingClientRect()

  switch (direction) {
    case 'left':
      return {
        top: containerOffsetTop + containerHeight / 2 - size.height / 2,
        left: containerOffsetLeft - size.width - ARROW_SIZE,
      }
    case 'right':
      return {
        top: containerOffsetTop + containerHeight / 2 - size.height / 2,
        left: containerOffsetLeft + containerWidth + ARROW_SIZE,
      }
    case 'bottom':
      return {
        top: containerOffsetTop + (containerHeight + size.height / 2 - ARROW_SIZE),
        left: containerOffsetLeft + containerWidth / 2 - size.width / 2,
      }
    default:
      return {
        top: containerOffsetTop - (size.height + ARROW_SIZE),
        left: containerOffsetLeft + containerWidth / 2 - size.width / 2,
      }
  }
}
