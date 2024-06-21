import { getYear } from 'date-fns'

export interface Option {
  label: string | number
  value: string | number
}

let YEAR_OPTIONS: Option[] = []
for (let year = getYear(new Date()); year >= 1950; year--) {
  YEAR_OPTIONS.push({
    label: `${year}년`,
    value: year,
  })
}

let MONTH_OPTIONS: Option[] = []
for (let month = 1; month <= 12; month++) {
  MONTH_OPTIONS.push({
    label: `${month}월`,
    value: month,
  })
}

export { YEAR_OPTIONS, MONTH_OPTIONS }
