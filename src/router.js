import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Demo1 from './pages/demo1/demo1'


class Router extends Component {
  state = {  }
  render() { 
    return ( 
      <Switch>
        <Route path="/demo1" component={Demo1}/>
      </Switch>
    );
  }
}
 
export default Router;