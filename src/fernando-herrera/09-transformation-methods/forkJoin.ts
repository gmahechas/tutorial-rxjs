/* 
Them must be finite

source1$: a, b,         |
source2$:       x, y    |
source3$:             z |

  output:                 [b,y,z] // only dispatch when  all observables have been completed
*/
import { of, interval, forkJoin } from 'rxjs';
import { take, delay, catchError } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(numbers$, interval$, letters$).pipe(
  catchError(error => of(error))
).subscribe(console.log);

forkJoin({ numbers: numbers$, interval: interval$, letters: letters$ }).pipe(
  catchError(error => of(error))
).subscribe(console.log);