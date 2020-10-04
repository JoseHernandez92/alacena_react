import ApiClient from './ApiClient'

class Service {

    async getLists(){
        const lists = await ApiClient.getJson('retrieveLists')
        
        return lists
    }
    
    async retrieveProducts(currentCategory) {
        const products_retrieved = await ApiClient.getJson(`retrieveProducts?category=${currentCategory}`)

        return products_retrieved
    }

    async retrieveListProducts(list_name) {
        const products_retrieved = await ApiClient.getJson(`retrieveListProducts?list=${list_name}`)

        return products_retrieved
    }

    async addNewProduct(listAndProduct) {
        await ApiClient.postJson('addNewProduct', listAndProduct)
    }

    async retrieveCategories() {
        const categories_retrieved = await ApiClient.getJson(`retrieveCategories`)

        return categories_retrieved
    }

    async saveList(list){
       const response = await ApiClient.postJson('addNewList', list)

       return response
    }

    async deleteProductFromList(productAndList){
        const response = await ApiClient.postJson('deleteProductFromList', productAndList)

        return response
    }

    async deleteList(list){
        const response = await ApiClient.postJson('deleteList', list)

        return response
    }

    async addCategory(category){
        const response = await ApiClient.postJson('addCategory', category)

        return response
    }

    async addProduct(categoryAndProduct){
        const response = await ApiClient.postJson('addProduct', categoryAndProduct)

        return response
    }

    async deleteCategory(category){
        const response = await ApiClient.postJson('deleteCategory', category)

        return response
    }

    async deleteProduct(categoryAndProduct){
        const response = await ApiClient.postJson('deleteProduct', categoryAndProduct)

        return response
    }

}

export default Service