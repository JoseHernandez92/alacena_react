import HttpRequester from './HttpRequester'

async function retrieveShoppingLists () {
    const lists = await HttpRequester.get('retrieveLists')
    
    return lists
}

async function deleteShoppingList(list){
    const response = await HttpRequester.post('deleteList', list)

    return response
}

async function saveShoppingList(list){
    const response = await HttpRequester.post('addNewList', list)

    return response
 }

export {
    retrieveShoppingLists,
    deleteShoppingList,
    saveShoppingList
}