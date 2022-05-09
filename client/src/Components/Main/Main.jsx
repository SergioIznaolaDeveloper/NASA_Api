import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Neas from './Neas';
import Landings from './Landings';

export default function Main() {
  return (
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/landings' component={Landings}/>
    <Route path='/neas' component={Neas}/>
    </Switch>
  )
}
