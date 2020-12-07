/*
Emits values until another observable emits its first value
Recive other observable as argument
*/
import { interval, fromEvent } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const click$ = fromEvent(button, 'click');

counter$.pipe(takeUntil(click$)).subscribe(console.log);