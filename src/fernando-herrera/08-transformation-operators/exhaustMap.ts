/* 
source: a,     b,       c
 subs1: 0, 1 | 
 subs2:       a, b, c | 
 subs3:                 z

output: 0, 1, a, b, c,  z

- switchMap subscribe to the values emitted for source and dismiss all suscriptions until the current subs ends

*/

import { fromEvent, interval } from "rxjs";
import { take, concatMap, exhaustMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  exhaustMap(() => interval(1000).pipe(take(3)))
).subscribe(console.log);