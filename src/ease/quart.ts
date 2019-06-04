export function easeInQuart(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * (t /= d) * t * t * t + b
}

export function easeOutQuart(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return -cc * ((t = t / d - 1) * t * t * t - 1) + b
}

export function easeInOutQuart(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t * t + b
  }
  return (-cc / 2) * ((t -= 2) * t * t * t - 2) + b
}
