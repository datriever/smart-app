export function sum(xs: number[]) {
  return xs.reduce((acc, x) => acc + x, 0)
}

export type Req<T> = {
  tag: 'loading' | 'error'
} | {
  tag: 'loaded'
  val: T
}