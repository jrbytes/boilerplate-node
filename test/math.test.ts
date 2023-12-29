import { sum } from '../src/math';

test('deve somar 2 números', () => {
  expect(sum(1, 2)).toBe(3)
})