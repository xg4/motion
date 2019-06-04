export function easeOutBounce(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d
  if (t < 1 / 2.75) {
    return cc * (7.5625 * t * t) + b
  } else if (t < 2 / 2.75) {
    return cc * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
  } else if (t < 2.5 / 2.75) {
    return cc * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
  } else {
    return cc * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
  }
}

export function easeInBounce(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc - easeOutBounce(d - t, 0, cc, d) + b
}

export function easeInOutBounce(t: number, b: number, c: number, d: number) {
  const cc = c - b
  if (t < d / 2) {
    return easeInBounce(t * 2, 0, cc, d) * 0.5 + b
  }
  return easeOutBounce(t * 2 - d, 0, cc, d) * 0.5 + cc * 0.5 + b
}
