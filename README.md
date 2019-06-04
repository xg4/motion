# Motion

[![Build Status](https://www.travis-ci.com/xg4/motion.svg?branch=master)](https://www.travis-ci.com/xg4/motion)
[![codecov](https://img.shields.io/codecov/c/github/xg4/motion.svg)](https://codecov.io/gh/xg4/motion)
[![npm](https://img.shields.io/npm/v/@xg4/motion.svg)](https://www.npmjs.com/package/@xg4/motion)
[![npm](https://img.shields.io/npm/l/@xg4/motion.svg)](https://www.npmjs.com/package/@xg4/motion)

## Installation

### Install with npm or Yarn

```bash
# npm
$ npm install @xg4/motion --save
```

```bash
# yarn
$ yarn add @xg4/motion
```

## Usage

```js
import { move, easeInOutCubic } from '@xg4/motion'

function handler(value) {
  // value (0~100)
  console.log(value)
}

move(handler, {
  start: 0,
  end: 100,
  duration: 3000,
  ease: easeInOutCubic
})
```

### Move Options

| name     | type     | default        | description |
| -------- | -------- | -------------- | ----------- |
| start    | number   | 0              | 起始值      |
| end      | number   | 0              | 结束值      |
| duration | number   | 450            | 持续时间    |
| ease     | function | easeInOutCubic | 缓动函数    |
| count    | number   | 1              | 运动次数    |
| loop     | boolean  | false          | 循环运动    |

### ease function

| name    | in            | out            | in-out           |
| ------- | ------------- | -------------- | ---------------- |
| back    | easeInBack    | easeOutBack    | easeInOutBack    |
| bounce  | easeInBounce  | easeOutBounce  | easeInOutBounce  |
| circ    | easeInCirc    | easeOutCirc    | easeInOutCirc    |
| cubic   | easeInCubic   | easeOutCubic   | easeInOutCubic   |
| elastic | easeInElastic | easeOutElastic | easeInOutElastic |
| expo    | easeInExpo    | easeOutExpo    | easeInOutExpo    |
| quad    | easeInQuad    | easeOutQuad    | easeInOutQuad    |
| quart   | easeInQuart   | easeOutQuart   | easeInOutQuart   |
| quint   | easeInQuint   | easeOutQuint   | easeInOutQuint   |
| sine    | easeInSine    | easeOutSine    | easeInOutSine    |

## Contributing

Welcome

- Fork it

- Submit pull request

## LICENSE

MIT
