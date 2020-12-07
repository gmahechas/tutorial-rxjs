import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// you need create a button 
/* <button id="action-btn">action - btn text</button> */

const button = document.getElementById('action-btn');
const source = fromEvent(button, 'click');

source.pipe(
  map((e) => e.target)
).subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});

/* const source2 = fromEvent(document, 'mousemove');
source2.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
}) */