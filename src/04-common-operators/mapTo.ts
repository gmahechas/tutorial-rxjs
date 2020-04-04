/*
return any value
*/

import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const observable1$ = fromEvent<KeyboardEvent>(document, 'keyup');

observable1$.pipe(
  mapTo('Pressed')
).subscribe(console.log);
