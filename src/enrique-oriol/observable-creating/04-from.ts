import { from } from 'rxjs';

const myArr$ = from([1, 2, 3, 4, 5]);
myArr$.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})

const myArr2$ = from('hello');
myArr2$.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})

const myArr3$ = from(new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello world')
  }, 2000)
}));

myArr3$.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})