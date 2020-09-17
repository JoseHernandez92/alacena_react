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

function Body({changeAppLocation}) {
  const [category, setCategory] = useState("")

  const selectCategory = (category) => {
    setCategory(category)
  }

  return (
    <div>
        <Switch>
          <Route exact path="/" component={() => <Home onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/Lists" component={() => <Lists onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/NewList" component={() => <NewList onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/Categories" component={() => <Categories onClick={changeAppLocation} selectCategory={selectCategory}/>}>
          </Route>
          <Route path="/Products" component={() => <Products onClick={changeAppLocation} currentCategory={category}/>}>
          </Route>
          <Route path="/Options" component={() => <Options onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/SelectCategory" component={() => <SelectCategory onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/AddProduct" component={() => <AddProduct onClick={changeAppLocation}/>}>
          </Route>
        </Switch>
    </div>
  )
}

export default Body
