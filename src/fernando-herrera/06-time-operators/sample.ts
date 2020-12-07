/* 
it emits last value emited from other observable
*/
import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

interval$.pipe(
  sample(click$)
).subscribe(console.log);