import React from 'react';
import Login  from './components/Login'
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import store from './store'; // added
import Home from './components/Home';
import Cookies from 'js-cookie';
import Dashboard from './components/Dashboard';
class  App extends React.Component {
  
 authrequire = () =>{
      const mycookie   = Cookies.get('token')
      console.log(mycookie)
      // if(!mycookie){
      //   window.location = "/Login";
      // }
  }
  render(){
    // console.log(this.props)
    const mycookie   = Cookies.get('token')
      // console.log(mycookie)
  return (
    <Provider store = {store} >

    <div className="App">
      <header className="App-header">
        <h1>Hi there!!</h1>
        
        <Router>
        <Route exact path = '/Home' component = {Home} ></Route>
          <Route exact path='/Login' component={Login} ></Route>
          <Route exact path='/Dashboard' component={Dashboard} onEnter={this.authrequire}></Route>
        </Router>
      </header>
    </div>
    </Provider>
  );
  }
}
export default (App);
