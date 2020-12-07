/* 
input:  1, 2, 2, 5, 5, 3, 1, 4, 4, 4, 5 
output: 1, 2,    5,    3, 1, 4,       5

for objects
distinctUntilChanged( (previous, current) => previous.name === current.name) if it's true then skip
*/
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const observable1$ = from([1, 2, 2, 5, 5, 3, 1, 4, 4, 4, 5]);

observable1$.pipe(
  distinctUntilChanged()
).subscribe(console.log);