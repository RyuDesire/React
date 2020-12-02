const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Ryu'))

console.log(saludar2('Desire'));
console.log(saludar3('Ryu'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_papi1502'
    }
}
//Devolver un objeto implicitamente con una función flecha
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_papi1502'
});

console.log(getUser());
console.log(getUser2());

const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una función de flecha
//2. Retornar objeto implicito
function getUsuarioActivo(nombre){
    return {
        uid:'ABC567',
        username: nombre
    }
};

//Resuelta
const rgetUsuarioActivo= (nombre) => ({
    uid:'ABC567',
    username: nombre
});

const usuarioActivo = rgetUsuarioActivo('Ryu');
console.log(usuarioActivo);