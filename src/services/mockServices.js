import products from './products.json'

const productsAll = () => {

    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products)
        }, 2000)

    })


}

export {productsAll};