const { getHeroById } = require("./bases/08-imp-exp");

// const promesa = new Promise( (resolve, reject)=>{
//     setTimeout(()=> {
//         const heroe = getHeroById(2);
//         resolve(heroe);
//     }, 2000)
// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(error => console.warn(error));

const getHeroebyIdAsync = (id) => {
    return new Promise( (resolve, reject)=>{
        setTimeout(()=> {
            const heroe = getHeroById(id);
            if (heroe) 
            {
                resolve(heroe);
            }
            else
            {
                reject('No se pudo encontrar héroe');
            }
            
        }, 2000)
    });
    
} 
getHeroebyIdAsync(3)
.then(console.log)
.catch( console.warn);