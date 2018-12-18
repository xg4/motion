import raf from 'raf'

const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  } else {
    return (cc / 2) * ((t -= 2) * t * t + 2) + b
  }
}

export default class Animation {
  static create(...args) {
    if (!this._i) {
      this._i = new this(...args)
    }
    return this._i
  }

  defaultOptions = {
    from: 0,
    to: 0,
    duration: 450,
    timingFunc: easeInOutCubic
  }

  currentOptions = {
    ...this.defaultOptions
  }

  constructor(options = {}) {
    this.setDefaultOptions(options)
  }

  setDefaultOptions(options) {
    Object.assign(this.currentOptions, options)
  }

  resetDefaultOptions() {
    this.currentOptions = { ...this.defaultOptions }
  }

  move(callback, options) {
    return new Promise(resolve => {
      options = {
        ...this.currentOptions,
        ...options
      }
      const { from, to, duration, timingFunc } = options
      const startTime = Date.now()
      const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime

        callback(timingFunc(time, from, to, duration))
        if (time < duration) {
          raf(frameFunc)
        } else {
          callback(to)
          resolve()
        }
      }
      raf(frameFunc)
    })
  }
}
