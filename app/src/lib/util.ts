export function sum(xs: number[]) {
  return xs.reduce((acc, x) => acc + x, 0)
}