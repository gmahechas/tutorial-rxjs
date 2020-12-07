/* 
emit value but every n milliseconds but skips the others in lapse time
*/
import { fromEvent } from "rxjs";
import { throttleTime, tap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  tap(() => console.log('emit')),
  throttleTime(2000)
).subscribe(console.log);