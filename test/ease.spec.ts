import * as ease from '../src/ease'

test('easeInBack', () => {
  expect(ease.easeInBack(0, 0, 1000, 3000)).toBe(0)
  expect(ease.easeInBack(100, 0, 1000, 3000)).toBe(-1.7905859259259262)
})

test('easeInOutBack', () => {
  expect(ease.easeInOutBack(100, 0, 1000, 3000)).toBe(-5.233886370370371)
})

test('easeOutBack', () => {
  expect(ease.easeOutBack(100, 0, 1000, 3000)).toBe(149.70476962962996)
})

test('easeInBounce', () => {
  expect(ease.easeInBounce(100, 0, 1000, 3000)).toBe(14.513888888888914)
})

test('easeInOutBounce', () => {
  expect(ease.easeInOutBounce(100, 0, 1000, 3000)).toBe(6.111111111111143)
})

test('easeOutBounce', () => {
  expect(ease.easeOutBounce(100, 0, 1000, 3000)).toBe(8.402777777777779)
})

test('easeInCirc', () => {
  expect(ease.easeInCirc(100, 0, 1000, 3000)).toBe(0.5557099623366701)
})

test('easeInOutCirc', () => {
  expect(ease.easeInOutCirc(100, 0, 1000, 3000)).toBe(1.1123484301411302)
})

test('easeOutCirc', () => {
  expect(ease.easeOutCirc(100, 0, 1000, 3000)).toBe(256.03819159562033)
})

test('easeInCubic', () => {
  expect(ease.easeInCubic(100, 0, 1000, 3000)).toBe(0.037037037037037035)
})

test('easeOutCubic', () => {
  expect(ease.easeOutCubic(100, 0, 1000, 3000)).toBe(96.70370370370374)
})

test('easeInOutCubic', () => {
  expect(ease.easeInOutCubic(100, 0, 1000, 3000)).toBe(0.14814814814814814)
})

test('easeInElastic', () => {
  expect(ease.easeInElastic(100, 0, 1000, 3000)).toBe(0.21365526788911257)
})

test('easeInOutElastic', () => {
  expect(ease.easeInOutElastic(100, 0, 1000, 3000)).toBe(0.6926530240832527)
})

test('easeOutElastic', () => {
  expect(ease.easeOutElastic(100, 0, 1000, 3000)).toBe(391.9901225692704)
})

test('easeInExpo', () => {
  expect(ease.easeInExpo(100, 0, 1000, 3000)).toBe(1.2303916502879626)
})

test('easeInOutExpo', () => {
  expect(ease.easeInOutExpo(100, 0, 1000, 3000)).toBe(0.7750981699063472)
})

test('easeOutExpo', () => {
  expect(ease.easeOutExpo(100, 0, 1000, 3000)).toBe(206.29947401590022)
})

test('easeInQuad', () => {
  expect(ease.easeInQuad(100, 0, 1000, 3000)).toBe(1.1111111111111112)
})

test('easeOutQuad', () => {
  expect(ease.easeOutQuad(100, 0, 1000, 3000)).toBe(65.55555555555556)
})

test('easeInOutQuad', () => {
  expect(ease.easeInOutQuad(100, 0, 1000, 3000)).toBe(2.2222222222222223)
})

test('easeInQuart', () => {
  expect(ease.easeInQuart(100, 0, 1000, 3000)).toBe(0.0012345679012345679)
})

test('easeOutQuart', () => {
  expect(ease.easeOutQuart(100, 0, 1000, 3000)).toBe(126.81358024691359)
})

test('easeInOutQuart', () => {
  expect(ease.easeInOutQuart(100, 0, 1000, 3000)).toBe(0.009876543209876543)
})

test('easeInQuint', () => {
  expect(ease.easeInQuint(100, 0, 1000, 3000)).toBe(0.00004115226337448559)
})

test('easeOutQuint', () => {
  expect(ease.easeOutQuint(100, 0, 1000, 3000)).toBe(155.91979423868307)
})

test('easeInOutQuint', () => {
  expect(ease.easeInOutQuint(100, 0, 1000, 3000)).toBe(0.0006584362139917695)
})

test('easeInSine', () => {
  expect(ease.easeInSine(100, 0, 1000, 3000)).toBe(1.3704652454262032)
})

test('easeOutSine', () => {
  expect(ease.easeOutSine(100, 0, 1000, 3000)).toBe(52.33595624294383)
})

test('easeInOutSine', () => {
  expect(ease.easeInOutSine(100, 0, 1000, 3000)).toBe(2.739052315863355)
})
