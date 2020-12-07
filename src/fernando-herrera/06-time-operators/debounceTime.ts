/* 
delay to emit event
*/
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(3000)
).subscribe(console.log);