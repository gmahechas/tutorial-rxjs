import { Observable } from 'rxjs';

const hello$ = Observable.create(function (observer) {
  observer.next('Hello');
  setTimeout(() => {
    observer.next('World');
  }, 3000)
});

hello$.subscribe(value => console.log(value));