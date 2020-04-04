// count n+1 every x miliseconds
import { interval, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('Next:::', value),
  error: error => console.error('Error:::', error),
  complete: () => console.log('Completed')
};

const interval$ = interval(2000);

interval$.subscribe(observer);