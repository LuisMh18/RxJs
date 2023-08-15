
import { interval, timer } from 'rxjs';


const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 ); //le sumamos 5s a la fecha actual

const interval$ = interval(1000);
// const timer$ = timer(2000);

/*
  * Con esto le indicamos que inicie a aprtir de 2segundos pero que luego se ejecute cada segundo
*/
// const timer$ = timer(2000, 1000);

/*
 * Con esto podemos programar en que fecha queremos que se ejecute nuestro timer, es como un cron en nodeJS
 */
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');