/* 
source: a,     b,       c
 subs1: 0, 1 | 
 subs2:       a, b, c | 
 subs3:                 z

output: 0, 1, a, b, c,  z

Only emit values when the before suscription is complete
*/

import { fromEvent, interval } from "rxjs";
import { take, concatMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  concatMap(() => interval(1000).pipe(take(3)))
).subscribe(console.log);