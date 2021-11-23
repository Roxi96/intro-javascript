import {getHeroeById} from './bases/08-imp-exp';



// const promesa = new Promise((resolve, reject) =>{
    
//     setTimeout(()=>{
//         //tarea
//         //importen el
//         const p1 = getHeroeById(2);

//         //reject(p1);
//         reject('No se pudo encontrar el heroe');
       
//     }, 2000)

// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn(err));


const getHeroeByIdAsync=( id )=>{

    return new Promise((resolve, reject) =>{
    
    setTimeout(()=>{
        //tarea
        //importen el
        const p1 = getHeroeById(id);
        console.log(p1);
        if(p1){
           resolve(p1);
        }else{
            reject('no se pudo encontrar');
        }
        // resolve(p1);
       //reject('No se pudo encontrar el heroe');
       
    }, 2000)

    

});

}
getHeroeByIdAsync(10)
.then(heroe => console.log('heroe',heroe))              
.catch(err => console.warn(err));
// .catch(console.warn);
 
