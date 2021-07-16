export const normalizeUsers = (users) => {
  return Object.entries(users).map((item) => ({
    key: item[0],
    ...item[1]
  }))
}