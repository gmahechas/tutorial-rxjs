import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const observable1$ = range(1, 5);
const observable2$ = fromEvent<KeyboardEvent>(document, 'keyup');

observable1$.pipe(
  map<number, number>(value => value * 10)
).subscribe(console.log);

observable2$.pipe(
  map((event) => event.code)
).subscribe(console.log);