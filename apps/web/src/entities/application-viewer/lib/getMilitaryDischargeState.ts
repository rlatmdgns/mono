export const getMilitaryDischargeState = (
  discharge: string,
): {
  text: string
  type: 'standard' | 'success' | 'gray'
} => {
  switch (discharge) {
    case '복무중':
      return {
        text: '복무중',
        type: 'success',
      }
    case '만기':
      return {
        text: '만기전역',
        type: 'standard',
      }
    default:
      return {
        text: discharge,
        type: 'gray',
      }
  }
}
