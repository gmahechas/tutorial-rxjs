// It works like interval function
import { Observer, timer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

const interval$ = timer(2000, 1000);

interval$.subscribe(observer);