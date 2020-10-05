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

function Body({ changeAppLocation }) {
  const [current_category, setCurrentCategory] = useState("")
  const [current_list, setCurrentList] = useState("")
  const [shopping_mode, setShoppingMode] = useState(false)

  const selectCategory = (category) => {
    setCurrentCategory(category)
  }

  const setList = (list) => {
    setCurrentList(list)
  }

  const activateShoppingMode = (state) => {
    setShoppingMode(state)
  }

  return (
    <div>
        <Switch>
          <Route exact path="/" 
            component={() => <Home changeAppLocation={changeAppLocation}/>}
          />
          <Route path="/Lists" 
            component={() => <Lists changeAppLocation={changeAppLocation} setCurrentList={setList}/>}
          />
          <Route path="/ViewList" 
            component={() => <ViewList changeAppLocation={changeAppLocation} list_name={current_list} activateShoppingMode={activateShoppingMode}/>}
          />
          <Route path="/NewList" 
            component={() => <NewList changeAppLocation={changeAppLocation} setCurrentList={setList}/>}
          />
          <Route path="/Options" 
            component={() => <Options changeAppLocation={changeAppLocation}/>}
          />
          <Route path="/Categories" 
            component={() => <Categories changeAppLocation={changeAppLocation} selectCategory={selectCategory}/>}
          />
          <Route path="/Products" 
            component={() => <Products changeAppLocation={changeAppLocation} currentCategory={current_category}/>}
          />
          <Route path="/SelectCategory" 
            component={() => <SelectCategory changeAppLocation={changeAppLocation} list_name={current_list} selectCategory={selectCategory} shoppingMode={shopping_mode}/>}
          />
          <Route path="/AddProduct" 
            component={() => <AddProduct changeAppLocation={changeAppLocation} list_name={current_list} currentCategory={current_category} />}
          />
        </Switch>
    </div>
  )
}

export default Body
