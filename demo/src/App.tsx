import React from 'react'
import {
  move,
  easeInBounce,
  easeInOutBounce,
  easeInOutExpo,
  easeOutBounce,
  easeOutElastic
} from '../../src'

const blocks = [
  '#1abc9c',
  '#16a085',
  '#2ecc71',
  '#27ae60',
  '#3498db',
  '#2980b9',
  '#9b59b6',
  '#8e44ad',
  '#34495e',
  '#2c3e50',
  '#f1c40f',
  '#f39c12',
  '#e67e22',
  '#d35400',
  '#e74c3c',
  '#c0392b',
  '#ecf0f1',
  '#bdc3c7',
  '#95a5a6',
  '#7f8c8d'
]

export default class App extends React.Component {
  public get scrollTop() {
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
              start: 0,
              end: 20000,
              duration: 4 * 1000,
              ease: easeInBounce,
              count: 2,
              loop: true
            })
          }}
        >
          easeInBounce(reverse,count=2)
        </button>
        <div style={{ height: '20000px', border: '1px solid #333' }}>
          {blocks.map((color, index) => (
            <div
              key={index}
              style={{
                height: 20000 / blocks.length + 'px',
                backgroundColor: color
              }}
            />
          ))}
        </div>
        <button
          onClick={() => {
            move(this.setScrollTop, {
              start: this.scrollTop,
              end: 0,
              duration: 4 * 1000,
              ease: easeInBounce,
              count: 2
            })
          }}
        >
          easeInBounce(count=2)
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              start: this.scrollTop,
              end: 0,
              duration: 4 * 1000,
              ease: easeOutBounce
            })
          }}
        >
          easeOutBounce
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              start: this.scrollTop,
              end: 0,
              duration: 4 * 1000,
              ease: easeInOutExpo
            })
          }}
        >
          easeInOutExpo
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              start: this.scrollTop,
              end: 0,
              duration: 4 * 1000,
              ease: easeInOutBounce
            })
          }}
        >
          easeInOutBounce
        </button>

        <button
          onClick={() => {
            move(this.setScrollTop, {
              start: this.scrollTop,
              end: 0,
              duration: 4 * 1000,
              ease: easeOutElastic
            })
          }}
        >
          easeInBounce
        </button>
      </div>
    )
  }
}
