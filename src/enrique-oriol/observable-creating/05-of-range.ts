import { of, range, scheduled, SchedulerLike } from 'rxjs';

/* const source = of(1, 2, 3, 4, 5, 6);
const subscription = source.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})
subscription.unsubscribe(); */


/* const source2 = of([1, 2, 3], 'Hello', { foo: 'bar' }, () => 'Hi');
const subscription2 = source2.subscribe({
  next: next => {
    console.log(typeof next);
  },
  error: error => console.error(error),
  complete: () => console.log('Completed')
}) */

const source3 = range(3, 10);
const subscription3 = source3.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})