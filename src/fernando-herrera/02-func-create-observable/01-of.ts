import { Observer, of } from 'rxjs';

//const observable$ = of<number[]>([1, 2]);
// const observable$ = of<any>([1, 2], { a: 1, b: 2 });
const observable$ = of<any>([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

const observer: Observer<any> = {
  next: value => console.log(value),
  error: error => console.log('Error', error),
  complete: () => console.log('Completed')
}
observable$.subscribe(observer);