import { range } from 'rxjs';
import { tap } from 'rxjs/operators';

const observable1$ = range(1, 10);

observable1$.pipe(
  tap(x => console.log('Tap:', x)),
  tap({
    next: nextVal => console.log(nextVal),
    complete: () => console.log('Se termino')
  })
).subscribe(y => console.log('Subs:', y));