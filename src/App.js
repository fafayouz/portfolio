import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Eroor404 from './pages/Eroor404';
import Home from './pages/Home';
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/About' component={About}/>
          <Route exact component={Eroor404}/>
        </Switch>
      </Router>

    </>
  )
}

export default App
