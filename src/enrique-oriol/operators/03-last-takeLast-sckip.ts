import { fromEvent } from 'rxjs';
import { map, takeWhile, last, tap, takeLast, skip } from 'rxjs/operators';

const grid = document.getElementById('grid');

// TakeWhile whit last
/* const source1 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 > 3), // take elements tahn met the conditionn and then it unsubscribe
  tap(val => console.log(val)),
  last() // take the last valid elemten in takeWhile
);
source1.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */

// TakeWhile whit takeLast
/* const source2 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 > 3), // take elements tahn met the conditionn and then it unsubscribe
  tap(val => console.log(val)),
  takeLast(3) // take the 3 last valid elemten in takeWhile
);
source2.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */


const source3 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  skip(3), // skip 3 elements and do tap
);
source3.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});