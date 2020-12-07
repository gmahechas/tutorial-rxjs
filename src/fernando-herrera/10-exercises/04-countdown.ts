import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

  const start = 7;
  const countdown$ = interval(700).pipe(
    map(val => start - val),
    take(start + 1)
  );

  countdown$.subscribe(console.log);


})();