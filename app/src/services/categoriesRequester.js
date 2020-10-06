import HttpRequester from './HttpRequester'

async function retrieveCategories() {
    const categories_retrieved = await HttpRequester.get(`retrieveCategories`)

    return categories_retrieved
}

async function addCategory(category){
    const response = await HttpRequester.post('addCategory', category)

    return response
}

async function deleteCategory(category){
    const response = await HttpRequester.post('deleteCategory', category)

    return response
}


export {
    retrieveCategories,
    addCategory,
    deleteCategory
}