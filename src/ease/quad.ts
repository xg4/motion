export function easeInQuad(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * (t /= d) * t + b
}

export function easeOutQuad(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return -cc * (t /= d) * (t - 2) + b
}

export function easeInOutQuad(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t + b
  }
  return (-cc / 2) * (--t * (t - 2) - 1) + b
}
