/* 
it emits last value emited from other observable
*/
import { fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  auditTime(2000)
).subscribe(console.log);