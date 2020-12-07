import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

const observable1$ = range(1,10);

observable1$.pipe(
  filter(value => value % 2 === 1)
).subscribe(console.log);