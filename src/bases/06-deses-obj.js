//desestructuracion
//asignacion desestructutante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    rango: 'soldado'
};

// const {nombre, edad, clave}= persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, clave, rango, }) => {
    // console.log(nombre, edad, clave, rango);

    return{
        nombreClave: clave,
        anios: edad
    }
}

const {avenger, anios} = useContext(persona);
console.log(nombreClave);