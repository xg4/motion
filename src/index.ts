import raf from 'raf'
import { easeInOutCubic } from '@xg4/easings'

interface MotiveOptions {
  from?: number
  to?: number
  duration?: number
  timingFunc?: Function
  count?: number // 0:'infinite', 1:'stop', >1:'count'
  reverse?: boolean
}

export function move(callback: Function, options: MotiveOptions = {}) {
  return new Promise(resolve => {
    const {
      from = 0,
      to = 0,
      duration = 450,
      timingFunc = easeInOutCubic,
      count = 1,
      reverse
    } = options
    const startTime = Date.now()
    const frameFunc = () => {
      const timestamp = Date.now()
      const time = timestamp - startTime

      callback(timingFunc(time, from, to, duration))
      if (time < duration) {
        raf(frameFunc)
      } else {
        callback(to)

        if (reverse) {
          options.to = from
          options.from = to
        }

        if (count === 1) {
          resolve()
        } else {
          if (count > 1) {
            options.count = count - 1
          }

          move(callback, options)
        }
      }
    }
    raf(frameFunc)
  })
}
