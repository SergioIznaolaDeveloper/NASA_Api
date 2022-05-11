import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Landings from './Landings/Landings';
import Delete from '../Utils/Delete/Delete';
import NoDelete from '../Utils/NoDelete/NoDelete';

export default function Main() {
  return (
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/landings' component={Landings}/>
    <Route path='/neas' component={Neas}/>
    <Route path= '/delete' component={Delete}/>
    <Route path= '/nodelete' component={NoDelete}/>
    </Switch>
  )
}
