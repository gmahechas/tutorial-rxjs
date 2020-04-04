import { ajax } from 'rxjs/ajax';

const api = 'https://httpbin.org/delay/1';

ajax.post(
  api,
  {
    id: 1,
    nombre: 'Gustavo'
  },
  {
    'mi-token': 'ABC123'
  }
).subscribe(console.log);