/* 
Doesn't emit values if it valuehas been already emit

distinct( object => object.name )
*/
import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const observable1$ = from([1, 2, 2, 5, 5, 3, 1, 4, 4, 4, 5]);

observable1$.pipe(
  distinct()
).subscribe(console.log);