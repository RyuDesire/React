const activo = false;

// let mensaje = '';

// if (activo)
// {
//     mensaje = 'Activo';
// }
// else
// {
//     mensaje = 'Inactivo';
// }

//Operador condicional ternario
//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

//Operador ternario que devuelve null cuando la condición es falsa
//const mensaje = ( !activo ) ? 'Activo' : null;

//Operador ternario que devuelve false cuando la condición es falsa
const mensaje = activo && 'Activo' ;
console.log(mensaje);
