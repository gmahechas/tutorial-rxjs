import { Observable } from 'rxjs';

const hello$ = Observable.create(function (observer) {
  observer.next('Hello');
  setTimeout(() => {
    observer.next('World');
    observer.complete();
  }, 3000)
});

const suscription = hello$.subscribe({ //This is the observer
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});

suscription.unsubscribe(); // we won't see "World"

const suscription2 = hello$.subscribe({ //This is the observer
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
});