import { ajax } from 'rxjs/ajax';

const api = 'https://httpbin.org/delay/1';

const observable1$ = ajax.getJSON(api, {
  'Content-Type': 'application/json',
  'my-toke': 'ABC123'
});

observable1$.subscribe(data => console.log('Data:::', data));