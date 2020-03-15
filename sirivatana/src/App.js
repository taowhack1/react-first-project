import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Product from './Component/Product'
import Home from './Component/Home'
import About from './Component/About'
import Movies from './Component/Movies/Movies'

class  App extends Component{
  renderRouter(){
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Movies" component={Movies} />
        </Switch>
    )
  }
  render(){
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

export default App;
