import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubResponse } from '../interfaces/github-response.interface';
import { GithubUser } from '../interfaces/github-user.interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');

body.append(textInput);

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// GitHub
/* input$.pipe(
  debounceTime<KeyboardEvent>(1000),
  pluck<KeyboardEvent, string>('target', 'value'),
  mergeMap<string, Observable<GithubResponse>>(value => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
  pluck<GithubResponse, GithubUser[]>('items')
).subscribe(console.log); */


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck('target', 'value'),
  mergeMap(text => ajax.getJSON(url+text))
).subscribe(console.log);