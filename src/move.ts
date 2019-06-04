import raf from 'raf'
import { easeInOutCubic } from './ease'

export interface MoveOptions {
  start: number
  end: number
  duration: number
  ease: (
    time: number,
    start: number,
    end: number,
    duration: number,
    speed?: number
  ) => number
  count: number
  loop: boolean
}

export function move(
  callback: (value: number) => void,
  options: Partial<MoveOptions> = {}
) {
  return new Promise(resolve => {
    let { start = 0, end = 0, count = 1 } = options
    const { duration = 450, ease = easeInOutCubic, loop = false } = options

    const startTime = Date.now()
    const frameFunc = () => {
      const timestamp = Date.now()
      const time = timestamp - startTime

      callback(ease(time, start, end, duration))
      if (time < duration) {
        raf(frameFunc)
        return
      }
      callback(end)

      if (--count > 0) {
        if (loop) {
          ;[start, end] = [end, start]
        }
        move(callback, { ...options, start, end, count })
        return
      }

      resolve()
    }

    raf(frameFunc)
  })
}
