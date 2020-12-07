import { fromEvent } from 'rxjs';
import { map, takeWhile, distinct, distinctUntilChanged } from 'rxjs/operators';

const grid = document.getElementById('grid');

// distinc
/* const source1 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 != 0), // take elements tahn met the conditionn and then it unsubscribe
  map(([val1, val2]) => val1+val2),
  distinct() // it doesn't repeat values
);
source1.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */

// distinc 
/* const source2 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 != 0), // take elements tahn met the conditionn and then it unsubscribe
  distinct(([val1, val2]) => `${val1}-${val2}`) // it doesn't repeat values
);
source2.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */

// distinc until change
const source3 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 != 0), // take elements tahn met the conditionn and then it unsubscribe
  distinctUntilChanged(([val1, val2], [val3, val4]) => (val1 == val3) && (val2 == val4)) // it doesn't repeat values in consecutive mode
);
source3.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});