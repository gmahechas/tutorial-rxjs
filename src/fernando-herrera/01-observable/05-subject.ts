// Subject (It's an intermediary between Observable and suscriptions)
/* 
Using for send the same value to subscriptions

- It's an Observer
- It has next, error, and complete
*/

import { Observable, Subject } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {
  const interval = setInterval(() => {
    const num = Math.random();
    subscriber.next(num);
    console.log('Next:::', num);
  }, 1000);
  return () => {
    clearInterval(interval)
    console.log('Clear interval');
  };
});

// If I use this, I'll have different values
/* const suscription1 = interval$.subscribe(console.log);
const suscription2 = interval$.subscribe(console.log); */

// If I use this, It will be fix
const subject$ = new Subject();
const suscription0 = interval$.subscribe(subject$);

const suscription1 = subject$.subscribe(num => console.log('Subs1', num));
const suscription2 = subject$.subscribe(num => console.log('Subs2', num));


setTimeout(() => {
  subject$.complete()
  suscription0.unsubscribe();
  console.log('Timeout completed');
}, 5000);