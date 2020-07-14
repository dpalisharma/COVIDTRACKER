import React, {useEffect} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Global from './pages/Global'
import India from './pages/India'
import Navbar from './components/Navbar'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App=()=> {
  useEffect(()=>{
    M.AutoInit();
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/Global' component={Global}/>
          <Route path='/India' component={India}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
