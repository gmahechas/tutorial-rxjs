// Unsubscribe Subject

import { Observable, Subject, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

const interval$ = new Observable<number>(subscriber => {

  const interval = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(interval);
    console.log('Interval destroyed');
  };
});

// If I use this, I'll have different values
/* const suscription1 = interval$.subscribe(console.log);
const suscription2 = interval$.subscribe(console.log); */

// If I use this, It will be fix
const subject$ = new Subject();
const suscription0 = interval$.subscribe(subject$);

const suscription1 = subject$.subscribe(observer);
const suscription2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  suscription0.unsubscribe();
}, 3500)