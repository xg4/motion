import raf from 'raf'
import { easeInOutCubic } from '@xg4/easings'

const defaultOptions = {
  from: 0,
  to: 0,
  duration: 450,
  timingFunc: easeInOutCubic
}

export function move(callback, options) {
  return new Promise(resolve => {
    options = {
      ...defaultOptions,
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
