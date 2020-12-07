import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile } from 'rxjs/operators';

const grid = document.getElementById('grid');

// First
/* const source1 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  first(([val1, val2]) => val1 > 3) // take the first element and then it unsubscribe
);
source1.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */


// Take
/* const source2 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  take(4) // take 4 elements and then it unsubscribe
);
source2.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */

// TakeWhile
const source3 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 > 3) // take elements tahn met the conditionn and then it unsubscribe
);
source3.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});