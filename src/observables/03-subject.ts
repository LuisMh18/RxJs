
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalId =  setInterval(()=>{
        subs.next( Math.random() );
    }, 3000);

    return () => clearInterval( intervalId );

});

//const subs1 = intervalo$.subscribe( rnd => console.log("subs1: ", rnd) );
//const subs2 = intervalo$.subscribe( rnd => console.log("subs2: ", rnd) );

/* Caracteristicas importantes del Subject
  * 1- Casteo Multiple
  * 2.- También es un observer
  * 3.- Next, error y complete
*/

const subject$ = new Subject();
const suscription = intervalo$.subscribe( subject$ );


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    suscription.unsubscribe(); 
}, 6000);