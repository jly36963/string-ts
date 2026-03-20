import type { TupleOf } from '../internal/internals.js'
import type {
  All,
  IsNumberLiteral,
  IsStringLiteral,
} from '../internal/literals.js'
import type { Math } from '../internal/math.js'
import type { Join } from './join.js'

type SafeRepeatCount =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45

/**
 * Repeats a string N times.
 * T: The string to repeat.
 * N: The number of times to repeat.
 *
 * For counts above 45 the return type falls back to `string` to avoid
 * hitting TypeScript's type-instantiation depth limit.
 */
export type Repeat<T extends string, times extends number = 0> = T extends T
  ? All<[IsStringLiteral<T>, IsNumberLiteral<times>]> extends true
    ? times extends 0
      ? ''
      : Math.IsNegative<times> extends false
        ? times extends SafeRepeatCount
          ? Join<TupleOf<times, T>>
          : string
        : never
    : string
  : never

/**
 * A strongly-typed version of `String.prototype.repeat`.
 * @param str the string to repeat.
 * @param times the number of times to repeat.
 * @returns the repeated string in both type level and runtime.
 * For counts above 45 the return type falls back to `string`.
 * @example repeat('hello', 3) // 'hellohellohello'
 */
export function repeat<T extends string, N extends number = 0>(
  str: T,
  times: N = 0 as N
) {
  return str.repeat(times) as Repeat<T, N>
}
