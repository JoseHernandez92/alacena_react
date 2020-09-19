import ApiClient from './ApiClient'

class Service {

    async getLists(){
        const lists = await ApiClient.getJson('retrieveLists')

        return lists
    }
    
}

export default Service