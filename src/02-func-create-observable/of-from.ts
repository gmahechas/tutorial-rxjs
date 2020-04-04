/* 
of: return a values secuence
from: create an observable from array, promise, iterable, observable

fetch: Http Request from javascript
 */
import { of, from, Observer } from 'rxjs';


const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

const observable1$ = of([1,2,3,4,5]);
const observable2$ = from([1,2,3,4,5]);


observable1$.subscribe(observer);
observable2$.subscribe(observer);