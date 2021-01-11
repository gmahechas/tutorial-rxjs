// The complete function is different than unsubscribe

import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

const interval$ = new Observable<number>(subscriber => {

  let count = 0;
  const interval = setInterval(() => {
    count++
    subscriber.next(count);
    console.log('Next:::',count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 3000);

  return () => {
    clearInterval(interval);
    console.log('Interval destroyed');
  }
});

const suscription1 = interval$.subscribe(observer);
const suscription2 = interval$.subscribe(observer);
const suscription3 = interval$.subscribe(observer);

suscription1.add(suscription2).add(suscription3);

setTimeout(() => {
  suscription1.unsubscribe();
  console.log('Timeout completed');
}, 6000);