import quickSort from "./index"

// This is test is useless, but this is the general setup

// EXAMPLE SETUP

// npm run test

describe("Tests QuickSort", () => {
  it("Sorts an unsorted array", () => {
    const list = Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 40)
    )
    const controlList = [...list]
    const sortedList = quickSort(list, 0, list.length - 1)
    expect(list.length).toBeGreaterThan(0)
  })
})
