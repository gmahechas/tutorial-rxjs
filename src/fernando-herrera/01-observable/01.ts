// Subscribe to Observable

import { Observable } from 'rxjs';

// const obs$ = Observable.create();
const observable$ = new Observable<string>(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');

  // Force error
/*   const person = undefined;
  person.name = 'TavoGus'; */

  subscriber.complete();
});

observable$.subscribe(
  next => console.log('Next:::', next),
  error => console.error('Error:::', error),
  () => console.log('Completed')
);