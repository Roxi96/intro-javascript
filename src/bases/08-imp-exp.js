import { heroes } from "../data/heroes";

// const getHeroeById = (id) => {
//     return heroes.find((heroe)=>{
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => heroes.find((heroes)=> heroes.id === id );

 const getHeroeByOwner =(owner)=>heroes.filter((heroe)=>heroe.owner === owner );


console.log(getHeroeById(2));



