import { easeInOutCubic } from '@xg4/easings'
import raf from 'raf'

export type easeFunc = (
  time: number,
  from: number,
  to: number,
  duration: number,
  s?: number,
) => number

export interface MotiveOptions {
  from?: number
  to?: number
  duration?: number
  ease?: easeFunc
  count?: number // Infinity, 1:'stop', >1:'count'
  reverse?: boolean
}

export function move(
  callback: (currentValue?: number) => void,
  options: MotiveOptions = {},
) {
  return new Promise((resolve) => {
    const {
      from = 0,
      to = 0,
      duration = 450,
      ease = easeInOutCubic,
      count = 1,
      reverse,
    } = options
    const startTime = Date.now()
    const frameFunc = () => {
      const timestamp = Date.now()
      const time = timestamp - startTime

      callback(ease(time, from, to, duration))
      if (time < duration) {
        raf(frameFunc)
      } else {
        // over
        callback(to)

        if (reverse) {
          options.to = from
          options.from = to
        }

        const nextCount = count - 1

        if (nextCount >= 1) {
          move(callback, { ...options, count: nextCount })
          return
        }

        resolve()
      }
    }
    raf(frameFunc)
  })
}
