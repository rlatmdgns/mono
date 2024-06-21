interface ForeignUniversity {
  label: string
  value: string
}

export const getForeignUniversity = (
  foreignUniversity: ForeignUniversity[],
  searchText: string,
) => {
  function binarySearch(items: ForeignUniversity[], target: string) {
    let left = 0
    let right = items.length - 1
    const results: ForeignUniversity[] = []

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const midLabel = items[mid].label.toLowerCase()

      if (midLabel.includes(target)) {
        results.push(items[mid])
        let index = mid - 1
        while (index >= left && items[index].label.toLowerCase().includes(target)) {
          results.push(items[index])
          index--
        }
        index = mid + 1
        while (index <= right && items[index].label.toLowerCase().includes(target)) {
          results.push(items[index])
          index++
        }
        return results
      } else if (midLabel < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return results
  }

  return binarySearch(foreignUniversity, searchText)
}
