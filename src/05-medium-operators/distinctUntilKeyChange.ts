import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const observable1$ = from<{ name: string }[]>([
  {
    name: 'Gustavo'
  },
  {
    name: 'Gustavo'
  },
  {
    name: 'Alexandra'
  },
  {
    name: 'Isabella'
  },
  {
    name: 'AnaLuna'
  }
]);

observable1$.pipe(
  distinctUntilKeyChanged('name')
).subscribe(console.log);