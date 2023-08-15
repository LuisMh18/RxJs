
import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ligula vel diam cursus rutrum. Sed gravida, risus a pharetra commodo, neque lectus elementum lacus, a luctus lorem dolor et mi. Fusce eu est ligula. Cras interdum pharetra dolor vel faucibus. Nulla volutpat dignissim quam non maximus. Fusce faucibus neque sed rutrum iaculis. Mauris eu ante a ipsum posuere consequat. Nam mollis massa in dui efficitur, in convallis augue finibus. Sed sit amet congue massa. Proin luctus tincidunt leo non sodales. Donec nulla arcu, vestibulum quis libero ac, maximus feugiat enim. Vestibulum sit amet mattis arcu. Aliquam cursus odio purus, nec eleifend ante fringilla sed. Aenean a arcu lacus. Vestibulum ullamcorper malesuada rutrum.
    <br/><br/>
    Nam dolor velit, porta lobortis rutrum at, consequat ut est. Curabitur aliquet, eros quis aliquet pharetra, lacus erat feugiat dui, vel scelerisque libero diam eget elit. Nam aliquet ante id congue pellentesque. Quisque dapibus dolor sit amet dolor egestas, nec varius urna vulputate. Cras tempor orci a interdum accumsan. Proin placerat tempor venenatis. Vivamus laoreet placerat velit eu bibendum. Maecenas efficitur tellus quis neque lacinia, vitae mattis leo ultrices. Cras rhoncus quam nec massa gravida volutpat. Mauris aliquam aliquam metus eu laoreet. Curabitur at ligula lacinia, dapibus urna eu, varius ex. Nunc consectetur tortor et faucibus faucibus.
    <br/><br/>
    Suspendisse et nisl diam. Duis mattis arcu tempus velit scelerisque, et tempor augue tincidunt. Sed a odio fringilla, vulputate sapien vel, mattis nibh. Phasellus nec luctus diam. Fusce eget elit nec lacus viverra consectetur nec vitae arcu. Quisque ac quam dolor. Aenean sapien ex, mollis ut erat egestas, vehicula pretium magna. Mauris nulla justo, fermentum vitae nunc quis, tincidunt pulvinar nisi. Sed libero lorem, varius egestas rhoncus sit amet, cursus quis urna. Nulla facilisi. Cras et purus nec neque luctus ullamcorper.
    <br/><br/>
    Nunc felis felis, sollicitudin eget ultrices ac, mollis et purus. In varius eu odio nec luctus. Sed consectetur imperdiet mi ut cursus. Morbi nec elit non velit finibus ornare. Donec in libero lacinia, gravida erat at, eleifend lectus. Quisque ante nunc, sagittis ut elit id, mollis tincidunt tellus. Suspendisse potenti. Etiam in lacinia purus. Sed non neque mi. Suspendisse tincidunt venenatis erat. Quisque nec fermentum lorem. Etiam ac diam suscipit, lacinia purus eu, ornare nisi. Suspendisse nisi nunc, mattis quis blandit in, laoreet sollicitudin risus.
    <br/><br/>
    Vestibulum ut urna dui. Curabitur vulputate metus vitae tempor commodo. Morbi mi quam, sodales a libero quis, aliquet pretium leo. Nunc fermentum turpis ante, et tempus ante varius quis. Nunc a efficitur purus. Cras sed posuere urna, at blandit orci. Donec maximus, ante sed finibus lobortis, velit arcu mattis dui, sit amet ullamcorper dui ipsum vitae leo. Etiam in nibh vel risus consectetur porttitor. Aliquam id pretium neque, et accumsan erat. Suspendisse potenti.
    <br/><br/>
    Suspendisse et nisl diam. Duis mattis arcu tempus velit scelerisque, et tempor augue tincidunt. Sed a odio fringilla, vulputate sapien vel, mattis nibh. Phasellus nec luctus diam. Fusce eget elit nec lacus viverra consectetur nec vitae arcu. Quisque ac quam dolor. Aenean sapien ex, mollis ut erat egestas, vehicula pretium magna. Mauris nulla justo, fermentum vitae nunc quis, tincidunt pulvinar nisi. Sed libero lorem, varius egestas rhoncus sit amet, cursus quis urna. Nulla facilisi. Cras et purus nec neque luctus ullamcorper.
    <br/><br/>
    Nunc felis felis, sollicitudin eget ultrices ac, mollis et purus. In varius eu odio nec luctus. Sed consectetur imperdiet mi ut cursus. Morbi nec elit non velit finibus ornare. Donec in libero lacinia, gravida erat at, eleifend lectus. Quisque ante nunc, sagittis ut elit id, mollis tincidunt tellus. Suspendisse potenti. Etiam in lacinia purus. Sed non neque mi. Suspendisse tincidunt venenatis erat. Quisque nec fermentum lorem. Etiam ac diam suscipit, lacinia purus eu, ornare nisi. Suspendisse nisi nunc, mattis quis blandit in, laoreet sollicitudin risus.
    <br/><br/>
    Vestibulum ut urna dui. Curabitur vulputate metus vitae tempor commodo. Morbi mi quam, sodales a libero quis, aliquet pretium leo. Nunc fermentum turpis ante, et tempus ante varius quis. Nunc a efficitur purus. Cras sed posuere urna, at blandit orci. Donec maximus, ante sed finibus lobortis, velit arcu mattis dui, sit amet ullamcorper dui ipsum vitae leo. Etiam in nibh vel risus consectetur porttitor. Aliquam id pretium neque, et accumsan erat. Suspendisse potenti.



`;


const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// función que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // console.log({ scrollTop, scrollHeight, clientHeight });

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe( console.log ); 
   
const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});

