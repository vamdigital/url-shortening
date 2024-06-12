export function dummyPromise(delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('dummy')
    }, delay)
  })
}
