import { Observable } from 'rxjs';

const myCustomInterval = (ms) => {
  return Observable.create(observer => {

    let count = 0;
    const id = setInterval(() => {
      observer.next(count);
      count++;

      if (count >= 5) {
        clearInterval(id);
        observer.complete();
      }
    }, ms)
  });
}

const myInterval = myCustomInterval(2000);

myInterval.subscribe(value => console.log(value));