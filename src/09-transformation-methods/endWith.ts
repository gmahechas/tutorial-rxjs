import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';

const numbers$ = of(1, 2, 3);

numbers$.pipe(
  endWith('s')
).subscribe(console.log);