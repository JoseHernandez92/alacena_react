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
}

export default Service