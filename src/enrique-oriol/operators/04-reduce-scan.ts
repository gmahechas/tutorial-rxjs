import { fromEvent } from 'rxjs';
import { map, takeWhile, reduce, scan } from 'rxjs/operators';

const grid = document.getElementById('grid');

// reduce
/* const source1 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 != 0), // take elements tahn met the conditionn and then it unsubscribe
  reduce((accumulator, current) => { // only emit data when the observer si complete
    return {
      clicks: accumulator.clicks + 1,
      cells: [...accumulator.cells, current]
    };
  }, { clicks: 0, cells: [] })
);
source1.subscribe({
  next: next => console.log('Click:', next.clicks, ', Cells:', JSON.stringify(next.cells)),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */

// scan
const source2 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 != 0), // take elements tahn met the conditionn and then it unsubscribe
  scan((accumulator, current) => { // this is same laki reduce but emit value every time
    return {
      clicks: accumulator.clicks + 1,
      cells: [...accumulator.cells, current]
    };
  }, { clicks: 0, cells: [] })
);
source2.subscribe({
  next: next => console.log('Click:', next.clicks, ', Cells:', JSON.stringify(next.cells)),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});