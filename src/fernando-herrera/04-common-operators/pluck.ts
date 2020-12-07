/*
Gets a property value

input: { name: 'Gustavo' }
pluck('name')
output: Gustavo 
*/

import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observable1$ = fromEvent<KeyboardEvent>(document, 'keyup');

observable1$.pipe(
  pluck('target', 'scrollWidth') // It's the same as do target.scrollWidth
).subscribe(console.log);