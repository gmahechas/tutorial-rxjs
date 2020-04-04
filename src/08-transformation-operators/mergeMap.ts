/* 
source: a,    b,       c
 subs1: 0, 1,    2
 subs2:       a,    b,    c
 subs3:                r     z

output: 0, 1, a, 2, b, r, c, z

- mergeMap subscribe to the values emitted for subs1, subs2, and subs3
- doesn't transfer the value to next operator
*/

import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

/* const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap(letter => interval(1000).pipe(
    map(i => letter + i),
    take(3)
  ))
).subscribe({
  next: value => console.log('next:', value),
  complete: () => console.log('completed')
}); */


// How much time was click pressed
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$)
  ))
).subscribe(console.log);