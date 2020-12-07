import { interval, timer } from 'rxjs';

// interval is like setInterval in js
// timer is like SetTimeout
/* const source = interval(500);
const suscription = source.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})
timer(3000).subscribe(() => suscription.unsubscribe()); */


const source2 = timer(4000, 1000);
const suscription2 = source2.subscribe({
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log('Completed')
})
timer(6000).subscribe(() => suscription2.unsubscribe());
