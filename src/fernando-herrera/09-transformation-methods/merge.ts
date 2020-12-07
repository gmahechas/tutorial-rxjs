/* 
Recive observables

source1$: a,    b
source2$:    x,    y
source3$:             z

  output: a, x, b, y, z
*/

import { interval, merge, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval1$ = interval(1000);

merge(
  interval1$.pipe(take(3)),
  interval1$.pipe(take(2)),
  interval1$.pipe(take(1))
).subscribe(console.log);