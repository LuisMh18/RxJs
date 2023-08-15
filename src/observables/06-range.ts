import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1,2,3,4,5);
/*
  ! Nota: no se interpreta como si fuera del 1 al 5, más bien es decir que va empezar en la posición inicial que le indicamos sea 1 
  ! y queremos 5 emisiones, es decir los 5 valores consecutivos siguientes
*/
// const src$ = range(1,10);

/*
  * podemos transformar la funcion sincrona en una asincrona
 */
const src$ = range(1,10, asyncScheduler);

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');