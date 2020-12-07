/* 
Recive observables

source1$: a,        b
source2$:    x,            y

  output:  [a,x], [b,x], [y,b],
*/

import { interval, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

const interval1$ = interval(1000);

combineLatest(
  interval1$.pipe(take(3)),
  interval1$.pipe(take(2)),
  interval1$.pipe(take(1))
).subscribe(console.log);