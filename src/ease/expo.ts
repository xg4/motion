export function easeInExpo(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return t === 0 ? b : cc * Math.pow(2, 10 * (t / d - 1)) + b
}

export function easeOutExpo(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return t === d ? b + cc : cc * (-Math.pow(2, (-10 * t) / d) + 1) + b
}

export function easeInOutExpo(t: number, b: number, c: number, d: number) {
  const cc = c - b
  if (t === 0) {
    return b
  }
  if (t === d) {
    return b + cc
  }
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * Math.pow(2, 10 * (t - 1)) + b
  }
  return (cc / 2) * (-Math.pow(2, -10 * --t) + 2) + b
}
