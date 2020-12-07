import { of } from 'rxjs';

//const observable$ = of<number[]>([1, 2]);
// const observable$ = of<any>([1, 2], { a: 1, b: 2 });
const observable$ = of<any>([1, 2], { a: 1, b: 2 }, function () { }, Promise.resolve(true));

observable$.subscribe(
  next => console.log(next),
  null,
  () => console.log('Completed')
)