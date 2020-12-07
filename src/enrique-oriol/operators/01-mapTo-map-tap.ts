import { fromEvent } from 'rxjs';
import { filter, map, mapTo, tap } from 'rxjs/operators';

const grid = document.getElementById('grid');


/* const source1 = fromEvent(grid, 'click').pipe(
  mapTo('Click') // transform mouse event into a string "Click"
);
source1.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}); */

const source2 = fromEvent(grid, 'click').pipe(
  tap(val => console.log(val)),
  map(({ offsetX, offsetY }: any) => [Math.floor(offsetX / 50), Math.floor(offsetY / 50)]), // map values
  tap(val => console.log(val)),
  filter(([val1, val2]) => (val1 + val2) % 2 != 0)
);
source2.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});