/* 
first() -> return first element
first(x => x == 10) -> return the first element that equals 10
*/
import { range } from 'rxjs';
import { first } from 'rxjs/operators';

const observable1$ = range(1, 5);

observable1$.pipe(
  first(val => val == 4)
).subscribe(console.log);