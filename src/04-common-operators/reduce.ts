/* 
Accumulates [1,2,3,4,5]
0+1=1
1+2=3
3+3=6
6+4=10
10+5=15

Only emit value until complete, that is the diffrence with reduce
*/
import { range, Observer } from 'rxjs';
import { reduce, tap } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

const observable1$ = range(1, 5);

observable1$.pipe(
  tap(val => console.log('Inicio: ', val)),
  reduce((acu, current) => acu + current),
  tap(val => console.log('Fin: ', val)),
).subscribe(observer);