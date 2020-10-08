import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home.js'
import ShoppingLists from '../views/ShoppingLists.js'
import NewList from '../views/NewList.js'
import Categories from '../views/Categories.js'
import Products from '../views/Products.js'
import Options from '../views/Options.js'
import AddProduct from '../views/AddProduct.js'
import SelectCategory from '../views/SelectCategory.js'
import ViewList from '../views/ViewList.js'

function Body({ changeAppLocation }) {
  const [shopping_mode, setShoppingMode] = useState(false)

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
            component={() => <ShoppingLists changeAppLocation={changeAppLocation}/>}
          />
          <Route path="/ViewList/:list" 
            component={() => <ViewList changeAppLocation={changeAppLocation} activateShoppingMode={activateShoppingMode}/>}
          />
          <Route path="/NewList" 
            component={() => <NewList changeAppLocation={changeAppLocation} />}
          />
          <Route path="/Options" 
            component={() => <Options changeAppLocation={changeAppLocation}/>}
          />
          <Route path="/Categories" 
            component={() => <Categories changeAppLocation={changeAppLocation}/>}
          />
          <Route path="/Products/:category" 
            component={() => <Products changeAppLocation={changeAppLocation}/>}
          />
          <Route path="/SelectCategory/:list" 
            component={() => <SelectCategory changeAppLocation={changeAppLocation} shoppingMode={shopping_mode}/>}
          />
          <Route path="/AddProduct/:category/:list" 
            component={() => <AddProduct changeAppLocation={changeAppLocation} />}
          />
        </Switch>
    </div>
  )
}

export default Body
