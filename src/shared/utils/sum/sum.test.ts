// sum.test.js
import { describe, expect, test } from 'vitest'
import sum from './sum'

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})