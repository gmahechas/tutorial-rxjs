// Prevent memory leak

import { Observable } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {

  let count = 0;
  const interval = setInterval(() => {
    count++
    subscriber.next(count);
    console.log(count);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('Interval destroyed');
  }
});

const suscription = interval$.subscribe();

setTimeout(() => {
  suscription.unsubscribe();
  console.log('Timeout completed');
}, 3000);
