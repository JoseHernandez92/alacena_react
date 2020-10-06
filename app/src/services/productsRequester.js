import HttpRequester from './HttpRequester'

async function retrieveCategoryProducts(currentCategory) {
    const products_retrieved = await HttpRequester.get(`retrieveProducts?category=${currentCategory}`)

    return products_retrieved
}

async function addProductToShoppingList(listAndProduct) {
    await HttpRequester.post('addNewProduct', listAndProduct)
}

async function addProductToCategory(categoryAndProduct){
    const response = await HttpRequester.post('addProduct', categoryAndProduct)

    return response
}

async function deleteProductFromCategory(categoryAndProduct){
    const response = await HttpRequester.post('deleteProduct', categoryAndProduct)

    return response
}

async function retrieveListProducts(list_name) {
    const products_retrieved = await HttpRequester.get(`retrieveListProducts?list=${list_name}`)

    return products_retrieved
}

async function deleteProductFromList(productAndList){
    const response = await HttpRequester.post('deleteProductFromList', productAndList)

    return response
}



export {
    retrieveCategoryProducts,
    addProductToShoppingList,
    addProductToCategory,
    deleteProductFromCategory,
    retrieveListProducts,
    deleteProductFromList
}