import HttpRequester from './HttpRequester'

class Service {

    async getLists() {
        const lists = await HttpRequester.getJson('retrieveLists')
        
        return lists
    }
    
    async retrieveProducts(currentCategory) {
        const products_retrieved = await HttpRequester.getJson(`retrieveProducts?category=${currentCategory}`)

        return products_retrieved
    }

    async retrieveListProducts(list_name) {
        const products_retrieved = await HttpRequester.getJson(`retrieveListProducts?list=${list_name}`)

        return products_retrieved
    }

    async addNewProduct(listAndProduct) {
        await HttpRequester.postJson('addNewProduct', listAndProduct)
    }

    async retrieveCategories() {
        const categories_retrieved = await HttpRequester.getJson(`retrieveCategories`)

        return categories_retrieved
    }

    async saveList(list){
       const response = await HttpRequester.postJson('addNewList', list)

       return response
    }

    async deleteProductFromList(productAndList){
        const response = await HttpRequester.postJson('deleteProductFromList', productAndList)

        return response
    }

    async deleteList(list){
        const response = await HttpRequester.postJson('deleteList', list)

        return response
    }

    async addCategory(category){
        const response = await HttpRequester.postJson('addCategory', category)

        return response
    }

    async addProduct(categoryAndProduct){
        const response = await HttpRequester.postJson('addProduct', categoryAndProduct)

        return response
    }

    async deleteCategory(category){
        const response = await HttpRequester.postJson('deleteCategory', category)

        return response
    }

    async deleteProduct(categoryAndProduct){
        const response = await HttpRequester.postJson('deleteProduct', categoryAndProduct)

        return response
    }

}

export default Service