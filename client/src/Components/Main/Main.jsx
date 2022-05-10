import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Landings from './Landings/Landings';

export default function Main() {
  return (
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/landings' component={Landings}/>
    <Route path='/neas' component={Neas}/>
    </Switch>
  )
}
