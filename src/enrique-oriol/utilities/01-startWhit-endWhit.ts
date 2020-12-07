import { fromEvent } from 'rxjs';
import { map, takeWhile, reduce, scan, startWith, endWith } from 'rxjs/operators';

const grid = document.getElementById('grid');

// startWhit
const source1 = fromEvent(grid, 'click').pipe(
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  takeWhile(([val1, val2]) => val1 != 0), // take elements tahn met the conditionn and then it unsubscribe
  startWith(['start dimendios', '10x10']), // init values
  endWith(['end dimendios', '10x10']) // end values
);
source1.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});