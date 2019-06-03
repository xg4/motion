# Motion

[![Build Status](https://www.travis-ci.com/xg4/motion.svg?branch=master)](https://www.travis-ci.com/xg4/motion)
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
import { move } from '@xg4/motion'
import { easeInOutCubic } from '@xg4/easings'

move(handler, {
  from: 0,
  to: 100,
  duration: 3000,
  ease: easeInOutCubic
})

function handler(value) {
  // value (0~100)
  console.log(value)
}
```

### Move Options

| name     | type     | default        | description          |
| -------- | -------- | -------------- | -------------------- |
| from     | number   | 0              | 起始值               |
| to       | number   | 0              | 结束值               |
| duration | number   | 450            | 运动持续时间         |
| ease     | function | easeInOutCubic | 缓动函数             |
| count    | number   | 1              | 运动次数             |
| reverse  | boolean  | false          | 反复运动时，是否反转 |

## Contributing

Welcome

- Fork it

- Submit pull request

## LICENSE

MIT
