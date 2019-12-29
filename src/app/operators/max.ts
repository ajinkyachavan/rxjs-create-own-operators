import { MonoTypeOperatorFunction } from 'rxjs';
import { reduce } from 'rxjs/operators';


export function max<T>(comparer?: (x: T, y: T) => number): MonoTypeOperatorFunction<T> {
  const max: (x: T, y: T) => T = (typeof comparer === 'function') ? (x, y) => comparer(x, y) > 0 ? x : y : (x, y) => x > y ? x : y;
  return reduce(max);
}
