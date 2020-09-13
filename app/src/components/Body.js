import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home.js'
import Lists from '../views/Lists.js'
import NewList from '../views/NewList.js'
import Products from '../views/Products.js'
import Options from '../views/Options.js'

function Body({changeAppLocation}) {

  return (
    <div>
        <Switch>
          <Route exact path="/" component={() => <Home onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/Lists" component={() => <Lists onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/NewList" component={() => <NewList onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/Products" component={() => <Products onClick={changeAppLocation}/>}>
          </Route>
          <Route path="/Options" component={() => <Options onClick={changeAppLocation}/>}>
          </Route>
        </Switch>
    </div>
  )
}

export default Body
