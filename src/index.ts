import raf from 'raf'
import { easeInOutCubic } from '@xg4/easings'

interface MoveOptions {
  from?: number
  to?: number
  duration?: number
  timingFunc?: Function
}

const defaultMoveOptions = {
  from: 0,
  to: 0,
  duration: 450,
  timingFunc: easeInOutCubic
}

export function move(callback: (value?: number) => void, options: MoveOptions) {
  return new Promise(resolve => {
    const { from, to, duration, timingFunc } = {
      ...defaultMoveOptions,
      ...options
    }
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
