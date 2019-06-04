import { easeInOutCubic } from '../src/ease'

test('easeInOutCubic', () => {
  expect(easeInOutCubic(100, 0, 1000, 3000)).toBe(0.14814814814814814)
})
