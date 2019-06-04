export function easeInCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * (t /= d) * t * t + b
}

export function easeOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * ((t = t / d - 1) * t * t + 1) + b
}

export function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  } else {
    return (cc / 2) * ((t -= 2) * t * t + 2) + b
  }
}
