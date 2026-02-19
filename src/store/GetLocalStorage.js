const getLocalStorage = (key, initial) => {
  try {
    const item = localStorage.getItem(key)

    if (!item) return initial

    const total = JSON.parse(item)

    return total ?? initial
  } catch {
    return initial
  }
}

export default getLocalStorage