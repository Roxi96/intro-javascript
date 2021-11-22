const personajes = ['Goku','Vegeta','Trunks'];

const [,,p3]= personajes;

console.log( p3);

const retornaArreglo = ( )=>{
    return [ 'ABC',123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tarea
//1. el priemr valor del arrgelo se llamara nombre
//2. el segundo se llamara  setNombre
const uS = (valor) => {
    return [ valor, ()=> {console.log('Hola mundo')}];
}
const [nombre, setnombre] = uS('Goku');

console.log(nombre);