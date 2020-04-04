// Foor from first argument to second argument
/*
range(10,10, asyncScheduler);
10,11...19
*/

import { range, asyncScheduler } from 'rxjs';

const observable1$ = range(10,10, asyncScheduler);

observable1$.subscribe(console.log);