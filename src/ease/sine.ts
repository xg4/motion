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
