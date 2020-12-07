import { ajax } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const api = 'https://api.github.com/users?per_pages=5';

ajax(api).pipe(
  pluck('response'),
  catchError(error => of([error.message]))
).subscribe(data => console.log('Data:::', data))