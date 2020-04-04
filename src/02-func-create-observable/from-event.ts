import { fromEvent, Observer } from 'rxjs';

const observable1$ = fromEvent<MouseEvent>(document, 'click');
const observable2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

/* observable1$.subscribe(observer);
observable2$.subscribe(observer); */

// You can access to al event
observable2$.subscribe(event => {
  console.log(event.key);
});

// You can destructuring de event as well
observable1$.subscribe(({ x, y }) => {
  console.log(x, y);
});