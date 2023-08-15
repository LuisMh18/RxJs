
import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of<number[]>(1,2,2,3,4,5,6,6,6);

numeros$.pipe(
    distinct()
).subscribe( console.log );


const dbz = [
    {
        nombre: "Goku"
    },
    {
        nombre: "Vegeta"
    },
    {
        nombre: "Goku"
    },
    {
        nombre: "Krilin"
    },
    {
        nombre: "Bulma"
    },
    {
        nombre: "Goku"
    },
];


from(dbz).pipe(
    distinct( v => v.nombre)
).subscribe( console.log );


