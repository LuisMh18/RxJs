
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}


const intervalo$ = new Observable<number>( subs => {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subs.next(count);
        console.log(count);
    }, 1000);

    setInterval(()=>{
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log("Intérvalo destruido");
    }

});

const subs = intervalo$.subscribe( observer );

setTimeout(() => {
    subs.unsubscribe();//cancelamos la suscripción
    console.log("completado timeout");
}, 5000);