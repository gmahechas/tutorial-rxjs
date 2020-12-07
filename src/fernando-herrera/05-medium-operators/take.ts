/* 
Only emit n events
*/
import { range } from 'rxjs';
import { take } from 'rxjs/operators';

const observable1$ = range(1, 5);

observable1$.pipe(
  take(2)
).subscribe(console.log);