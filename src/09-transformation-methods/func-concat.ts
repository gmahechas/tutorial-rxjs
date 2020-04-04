/* 
Recive observables

source1$: a, b |
source2$:        x, y |
source3$:               z |

  output: a, b,  x, y,  z
 */

import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval1$ = interval(1000);

concat(
  interval1$.pipe(take(3)),
  interval1$.pipe(take(2)),
  interval1$.pipe(take(1)),
  of(10)
).subscribe(console.log);
