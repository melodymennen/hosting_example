import React from "react"
import {Switch, Route} from "react-router-dom"

import Profile from './Profile'
import Login from './Login'

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        
    </Switch>
  )