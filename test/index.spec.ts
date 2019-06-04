import { move } from '../src'

test('move callback param is defined', () => {
  function callback(value) {
    expect(value).toBeDefined()
  }
  move(callback)
})
