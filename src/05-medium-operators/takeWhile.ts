/* 
Only emit n events until the condition is true

takeWhile(condition, inclusive) inclusive: value that break the condition

*/
import { range } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const observable1$ = range(1, 10);

observable1$.pipe(
  takeWhile(value => value < 5, true)
).subscribe(console.log);