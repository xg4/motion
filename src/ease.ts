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

export function easeInQuint(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * (t /= d) * t * t * t * t + b
}

export function easeOutQuint(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * ((t = t / d - 1) * t * t * t * t + 1) + b
}

export function easeInOutQuint(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t * t * t + b
  }
  return (cc / 2) * ((t -= 2) * t * t * t * t + 2) + b
}

export function easeInSine(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return -cc * Math.cos((t / d) * (Math.PI / 2)) + cc + b
}

export function easeOutSine(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return cc * Math.sin((t / d) * (Math.PI / 2)) + b
}

export function easeInOutSine(t: number, b: number, c: number, d: number) {
  const cc = c - b
  return (-cc / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}

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
