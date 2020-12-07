/*
 source1: a, b, c, d
 source2:             e, f, g

  output: a, b, c, d, e, f, g
*/
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubResponse } from '../interfaces/github-response.interface';
import { GithubUser } from '../interfaces/github-user.interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Show users

const showUsers = (usuarios: GithubUser[]) => {
  orderList.innerHTML = '';
  for (let usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver pagina';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(1000),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<GithubResponse>>(value => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
  mergeAll(),
  pluck<GithubResponse, GithubUser[]>('items')
).subscribe(showUsers);
