

import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/*
    * Filtra por valores impares
*/
// range(1, 10).pipe(
//     filter( val => val % 2 === 1 )
// ).subscribe( console.log );


range(1, 10).pipe(
    filter( (val, i) => {
        return val % 2 === 1
    } )
)//.subscribe( console.log ); 


interface Personajes {
    tipo: string;
    nombre:string;
}

const personajesDBZ: Personajes[] = [
    {
        tipo:"Saiyajin",
        nombre:"Goku"
    },
    {
        tipo:"Terricola",
        nombre:"Krilin"
    },
    {
        tipo:"Villano",
        nombre:"Freezer"
    },
    {
        tipo:"Saiyajin",
        nombre:"Vegte"
    },
    {
        tipo:"Saiyajin",
        nombre:"Gohan"
    },
];


from( personajesDBZ ).pipe(
    filter(({ tipo }) => {
        return tipo === 'Saiyajin'
    })
).subscribe(console.log);

/*
 * En una linea 
 */
from( personajesDBZ ).pipe(
    filter(({ tipo }) => tipo !== 'Saiyajin')
).subscribe(console.log);



// const buenos = personajesDBZ.filter(val => val.tipo === 'Saiyajin');
// console.log(buenos);

// const malos = personajesDBZ.filter(val => val.tipo === 'Villano');
// console.log(malos);


const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map(e => e.code),
    filter(key => key === 'Enter')
)

keyUp$.subscribe( console.log ); 