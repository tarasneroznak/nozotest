import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './components/Home'
import Market from './containers/Market'
import Product from './containers/Product'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/market' component={Market} />
      <Route path='/product/:id' component={Product} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
