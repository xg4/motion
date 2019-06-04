export function easeInElastic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  let s = 1.70158
  let p = 0
  let a = cc
  if (t === 0) {
    return b
  }
  t /= d
  if (t === 1) {
    return b + cc
  }
  if (!p) {
    p = d * 0.3
  }
  if (a < Math.abs(cc)) {
    a = cc
    s = p / 4
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(cc / a)
  }
  return (
    -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p)
    ) + b
  )
}

export function easeOutElastic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  let s = 1.70158
  let p = 0
  let a = cc
  if (t === 0) {
    return b
  }
  t /= d
  if (t === 1) {
    return b + cc
  }
  if (!p) {
    p = d * 0.3
  }
  if (a < Math.abs(cc)) {
    a = cc
    s = p / 4
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(cc / a)
  }
  return (
    a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
    cc +
    b
  )
}

export function easeInOutElastic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  let s = 1.70158
  let p = 0
  let a = cc
  if (t === 0) {
    return b
  }
  t /= d / 2
  if (t === 2) {
    return b + cc
  }
  if (!p) {
    p = d * (0.3 * 1.5)
  }
  if (a < Math.abs(cc)) {
    a = cc
    s = p / 4
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(cc / a)
  }
  if (t < 1) {
    return (
      -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
      b
    )
  }
  return (
    a *
      Math.pow(2, -10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
      0.5 +
    cc +
    b
  )
}
