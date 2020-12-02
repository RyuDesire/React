//Desestructuración 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//Se extraen las propiedades de un objeto y se guardan en constantes con el mismo nombre
//const { nombre, edad, clave } = persona;

//Se extraen las propiedades de un objeto y se almacenan a la cual se le asigna un nombre diferente
//const {nombre:nombre2, edad:edad2, clave: clave2} = persona;

//console.log(nombre2);
//console.log(edad2);
//console.log(clave2);
//Si se define el valor de una propiedad en la desestructuración en los parametros, el objeto tomará ese valor siempre 
//y cuando no esa propiedad no tenga un valor asignado anteriormente
const userContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
//console.log(nombre, edad, clave, rango);
return{
    nombreClave: clave,
    anios: edad,
    latlng:{
        lat: 14.1232,
        lng: -12.3232
    }
}

}

//desestrucrurando un objeto que contiene un objeto dentro
//const {nombreClave, anios, latlng} = userContext(persona);

//desestructurando las propiedades de un objeto almacenado dentro de otro objeto
const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);
console.log(nombreClave, anios);
console.log( lat, lng);