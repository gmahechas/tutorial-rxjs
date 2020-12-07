// Subscribe to Observable using Observer

import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

// const obs$ = Observable.create();
const observable$ = new Observable<string>(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');

  // Force error
/*   const person = undefined;
  person.name = 'TavoGus'; */

  subscriber.complete();
});

observable$.subscribe(observer);
