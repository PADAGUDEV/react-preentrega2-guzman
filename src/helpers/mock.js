import productsDB from './productsDB.json';

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productsDB)
    }, 3000)
})

