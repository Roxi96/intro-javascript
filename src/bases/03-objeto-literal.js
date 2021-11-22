

const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad:45,
    direccion:{
        ciudad: 'new york',
        zip: 123123,
        lat: 123123
    }
};

// console.log({persona});


//spread para hacer clon o extraer todas las propiedades para asignar
// al nuevo objeto
const persona2 = {...persona};
persona2.nombre = 'Peter';


console.log(persona);
console.log(persona2);