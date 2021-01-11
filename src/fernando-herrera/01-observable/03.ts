// Prevent memory leak

import { Observable } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {

  let count = 0;
  const interval = setInterval(() => {
    count++
    subscriber.next(count);
    //console.log('Next:::',count); // Test return () => {}
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('Interval destroyed');
  }
});

const suscription = interval$.subscribe(console.log);

setTimeout(() => {
  suscription.unsubscribe();
  console.log('Timeout completed');
}, 5000);

