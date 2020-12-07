/* 
emit the last emit value in n milliseconds
*/
import { fromEvent } from "rxjs";
import { sampleTime } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  sampleTime(2000)
).subscribe(console.log);