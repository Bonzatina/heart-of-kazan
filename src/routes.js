import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import NotFound from './NotFound'
import HelloInput from './containers/HelloInput'
import About from './components/About'

export const routes = (
    <div>
        <Route path='/' component={App}>
             <IndexRoute component={HelloInput} />
            <Route path='/about' component={About} />

        </Route>
        <Route path='*' component={NotFound} />
    </div>
)