export function easeInCirc(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return -cc * (Math.sqrt(1 - (t /= d) * t) - 1) + b
}

export function easeOutCirc(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * Math.sqrt(1 - (t = t / d - 1) * t) + b
}

export function easeInOutCirc(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (-cc / 2) * (Math.sqrt(1 - t * t) - 1) + b
  }
  return (cc / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
}
