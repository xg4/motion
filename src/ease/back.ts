export function easeInBack(
  t: number,
  b: number,
  c: number,
  d: number,
  s: number = 1.70158
) {
  const cc = c - b
  return cc * (t /= d) * t * ((s + 1) * t - s) + b
}

export function easeOutBack(
  t: number,
  b: number,
  c: number,
  d: number,
  s: number = 1.70158
) {
  const cc = c - b
  return cc * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
}

export function easeInOutBack(
  t: number,
  b: number,
  c: number,
  d: number,
  s: number = 1.70158
) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
  }
  return (cc / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
}
