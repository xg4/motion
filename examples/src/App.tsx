import React from 'react'
import { move } from '../../src'
import {
  easeInOutExpo,
  easeOutElastic,
  easeOutBounce,
  easeInBounce,
  easeInOutBounce
} from '@xg4/easings'

export default class App extends React.Component {
  get scrollTop() {
    return window.pageYOffset
  }

  setScrollTop(value) {
    console.log(value)
    window.scrollTo(0, value)
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: 0,
              to: 20000,
              duration: 4 * 1000,
              timingFunc: easeInBounce,
              count: 2,
              reverse: true
            })
          }}
        >
          easeInBounce(reverse,count=2)
        </button>
        <div style={{ height: '20000px' }} />
        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: this.scrollTop,
              to: 0,
              duration: 4 * 1000,
              timingFunc: easeInBounce,
              count: 2
            })
          }}
        >
          easeInBounce(count=2)
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: this.scrollTop,
              to: 0,
              duration: 4 * 1000,
              timingFunc: easeOutBounce
            })
          }}
        >
          easeOutBounce
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: this.scrollTop,
              to: 0,
              duration: 4 * 1000,
              timingFunc: easeInOutExpo
            })
          }}
        >
          easeInOutExpo
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: this.scrollTop,
              to: 0,
              duration: 4 * 1000,
              timingFunc: easeInOutBounce
            })
          }}
        >
          easeInOutBounce
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: this.scrollTop,
              to: 0,
              duration: 4 * 1000,
              timingFunc: easeOutElastic
            })
          }}
        >
          easeInBounce
        </button>
      </div>
    )
  }
}
