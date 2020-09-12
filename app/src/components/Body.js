import React from 'react'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'

import Home from '../views/Home.js'
import Lists from '../views/Lists.js'
import NewList from '../views/NewList.js'
import Products from '../views/Products.js'
import Options from '../views/Options.js'

function Body() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />}>
          </Route>
          <Route path="/Lists" component={() => <Lists/>}>
          </Route>
          <Route path="/NewList" component={() => <NewList />}>
          </Route>
          <Route path="/Products" component={() => <Products />}>
          </Route>
          <Route path="/Options" component={() => <Options />}>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Body