import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import NotFound from './NotFound'
import HelloInput from './containers/HelloInput'
import Map from './containers/Map'
import About from './components/About'

export const routes = (
    <div>
        <Route path='/' component={App}>
             <IndexRoute component={HelloInput} />
            <Route path='/about' component={About} />
            <Route path='/map' component={Map} />

        </Route>
        <Route path='*' component={NotFound} />
    </div>
)