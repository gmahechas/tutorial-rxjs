import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
  switchMap(() => interval(1000))
).subscribe(console.log);