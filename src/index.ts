import { easeInOutCubic } from '@xg4/easings'
import raf from 'raf'

type easeFuncBase = (
  time: number,
  from: number,
  to: number,
  duration: number,
) => number

type easeFuncWithSpeed = (
  time: number,
  from: number,
  to: number,
  duration: number,
  speed?: number,
) => number

export type easeFunc = easeFuncBase | easeFuncWithSpeed

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

        const parseCount = Number(count)
        if (parseCount <= 1 || Number.isNaN(parseCount)) {
          resolve()
          return
        }

        if (reverse) {
          options.to = from
          options.from = to
        }

        move(callback, { ...options, count: count - 1 })
      }
    }
    raf(frameFunc)
  })
}
