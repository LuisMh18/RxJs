
import { from } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

//reduce
from(numeros).pipe(
    reduce( totalAcumulador, 0 )
).subscribe( console.log )


//scan
from( numeros ).pipe(
    scan( totalAcumulador, 0 )
).subscribe( console.log );

//Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [

    { id:'jsks', autenticado: false, token: null },
    { id:'jsks', autenticado: true, token: 'ABC' },
    { id:'jsks', autenticado: true, token: 'ABC123' }

];


