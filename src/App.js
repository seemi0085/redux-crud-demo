
import React from "react";
import Home from './components/Home'
// import List from './components/List'
import Registration from './components/Registration'
import { Link, Route } from 'react-router-dom'
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store} >
      <div align="center" cellPadding="10" cellSpacing="5" border="3" color="blue">
        <Link to='/'>Home</Link>
        <Link to='/registration'> Registration form</Link>
      </div>

      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/registration" exact component={Registration} />
        <Route exact path='/user/:id?' component={Registration}></Route>
      </switch>

    </Provider>
  )

}
export default App;