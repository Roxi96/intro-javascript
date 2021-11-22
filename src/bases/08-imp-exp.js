import { heroes } from "./data/heroes";

// const getHeroeById = (id) => {
//     return heroes.find((heroe)=>{
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

const getHeroeById = (id) => {
    return heroes.find((heroe)=> heroes.id === id );
}
const getHeroeByOwner =(owner)=>heroes.filter((heroe)=>heroe.owner === owner );


console.log(getHeroeByOwner('Marvel'));



