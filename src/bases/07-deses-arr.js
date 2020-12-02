const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [goku] = personajes;

const [, Vegeta ] = personajes;

console.log(goku);
console.log(Vegeta);

const retornarArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras);

//Tarea
//1. El primer valor del arreglo se llamara nombre
//2. Se llamará SetNombre
const userState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo')}];
}

const [ nombre, setNombre] = userState( 'Goku' );
console.log(nombre);
setNombre();

//Ejecutar funcion almacenada dentro de un arreglo
//arr[1]();