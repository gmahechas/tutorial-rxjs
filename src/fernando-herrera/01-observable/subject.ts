// Subject (It's an intermediary between Observable and suscriptions)
/* 
Using for send the same value to subscriptions

- It's an Observer
- It has next, error, and complete
*/

import { Observable, Subject } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {

  const interval = setInterval(() => subscriber.next(Math.random()), 3000);

  return () => clearInterval(interval);
});

// If I use this, I'll have different values
/* const suscription1 = interval$.subscribe(console.log);
const suscription2 = interval$.subscribe(console.log); */

// If I use this, It will be fix
const subject$ = new Subject();
interval$.subscribe(subject$);

const suscription1 = subject$.subscribe(console.log);
const suscription2 = subject$.subscribe(console.log);