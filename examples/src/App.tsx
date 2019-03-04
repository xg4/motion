import {
  easeInBounce,
  easeInOutBounce,
  easeInOutExpo,
  easeOutBounce,
  easeOutElastic,
} from '@xg4/easings'
import React from 'react'
import { move } from '../../src'

export default class App extends React.Component {
  get scrollTop() {
    return window.pageYOffset
  }

  public setScrollTop(value) {
    console.log(value)
    window.scrollTo(0, value)
  }

  public render() {
    return (
      <div>
        <button
          onClick={() => {
            move(this.setScrollTop, {
              from: 0,
              to: 20000,
              duration: 4 * 1000,
              ease: easeInBounce,
              count: 2,
              reverse: true,
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
              ease: easeInBounce,
              count: 2,
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
              ease: easeOutBounce,
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
              ease: easeInOutExpo,
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
              ease: easeInOutBounce,
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
              ease: easeOutElastic,
            })
          }}
        >
          easeInBounce
        </button>
      </div>
    )
  }
}
