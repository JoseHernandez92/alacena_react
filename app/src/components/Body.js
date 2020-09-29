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

  const selectCategory = (category) => {
    setCategory(category)
  }

  const setCurrentList = (list_name) => {
    setList(list_name)
  }

  return (
    <div>
        <Switch>
          <Route exact path="/" component={() => <Home changeAppLocation={changeAppLocation}/>}>
          </Route>
          <Route path="/Lists" component={() => <Lists changeAppLocation={changeAppLocation} setCurrentList={setCurrentList}/>}>
          </Route>
          <Route path="/ViewList" component={() => <ViewList changeAppLocation={changeAppLocation} list_name={currentList}/>}>
          </Route>
          <Route path="/NewList" component={() => <NewList onClick={changeAppLocation} setCurrentList={setCurrentList}/>}>
          </Route>
          <Route path="/Categories" component={() => <Categories onClick={changeAppLocation} selectCategory={selectCategory}/>}>
          </Route>
          <Route path="/Products" component={() => <Products onClick={changeAppLocation} currentCategory={category}/>}>
          </Route>
          <Route path="/Options" component={() => <Options onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/SelectCategory" component={() => <SelectCategory onClick={changeAppLocation} list_name={currentList} selectCategory={selectCategory}/>}>
          </Route>
          <Route path="/AddProduct" component={() => <AddProduct onClick={changeAppLocation} list_name={currentList} currentCategory={category}/>}>
          </Route>
        </Switch>
    </div>
  )
}

export default Body
