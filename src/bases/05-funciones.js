//funciones
// const saludar = function( nombre){
//     return `hola, ${nombre}`;
// }

const saludar2 = ( nombre)=> {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre)=> `hola, ${nombre}`;
const saludar4 = ()=> `hola mundo`;
// console.log(saludar('Roxi'))

const getUser= () => ({
   
        uid:'32sdfsd',
        username:'roxa_76'
    

});

//tarea
// 1. hacer funcion flecha
// 2. tiene q retorna un objeto implicito (quitar el return)
// 3. ver q funcione
const getUsuarioActivo =( nombre ) =>({
    
        uid: 'sdgfrfg3',
        username: nombre
    
});



const usuarioActivo = getUsuarioActivo('Roxana');


console.log(saludar2('vegeta'));
console.log(saludar3('goku'));
console.log(saludar4());

console.log(getUser());

console.log(usuarioActivo, 'acaaa');