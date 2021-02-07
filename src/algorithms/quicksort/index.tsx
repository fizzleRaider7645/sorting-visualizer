const swap = (items: Array<number>, i: number, j: number) => {
  const temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

const partition = (items: Array<number>, left: number, right: number) => {
  var pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

const quickSort = (items: Array<number>, left: number, right: number) => {
  let index
  if (items.length > 1) {
    index = partition(items, left, right)
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      quickSort(items, index, right)
    }
  }
  return items
}

export default quickSort
