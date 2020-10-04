import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home.js'
import Lists from '../views/Lists.js'
import NewList from '../views/NewList.js'
import Categories from '../views/Categories.js'
import Products from '../views/Products.js'
import Options from '../views/Options.js'
import AddProduct from '../views/AddProduct.js'
import SelectCategory from '../views/SelectCategory.js'
import ViewList from '../views/ViewList.js'

function Body({changeAppLocation}) {
  const [category, setCategory] = useState("")
  const [currentList, setList] = useState("")
  const [shoppingMode, setShoppingMode] = useState(false)

  const selectCategory = (category) => {
    setCategory(category)
  }

  const setCurrentList = (list_name) => {
    setList(list_name)
  }

  const activateShoppingMode = (state) => {
    setShoppingMode(state)
  }

  return (
    <div>
        <Switch>
          <Route exact path="/" component={() => <Home changeAppLocation={changeAppLocation}/>}>
          </Route>
          <Route path="/Lists" component={() => <Lists changeAppLocation={changeAppLocation} setCurrentList={setCurrentList}/>}>
          </Route>
          <Route path="/ViewList" component={() => <ViewList changeAppLocation={changeAppLocation} list_name={currentList} activateShoppingMode={activateShoppingMode}/>}>
          </Route>
          <Route path="/NewList" component={() => <NewList changeAppLocation={changeAppLocation} setCurrentList={setCurrentList}/>}>
          </Route>
          <Route path="/Categories" component={() => <Categories changeAppLocation={changeAppLocation} selectCategory={selectCategory}/>}>
          </Route>
          <Route path="/Products" component={() => <Products changeAppLocation={changeAppLocation} currentCategory={category}/>}>
          </Route>
          <Route path="/Options" component={() => <Options changeAppLocation={changeAppLocation}/>}>
          </Route>
          <Route path="/SelectCategory" component={() => <SelectCategory changeAppLocation={changeAppLocation} list_name={currentList} selectCategory={selectCategory} shoppingMode={shoppingMode}/>}>
          </Route>
          <Route path="/AddProduct" component={() => <AddProduct changeAppLocation={changeAppLocation} list_name={currentList} currentCategory={category} />}>
          </Route>
        </Switch>
    </div>
  )
}

export default Body
