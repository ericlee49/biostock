import React from 'react';
import BioStockFooter from './components/Footer';
import AppMenu from './components/AppMenu';
import ImagesPage from './components/ImagesPage';
import Home from './components/Home';
import Requests from './components/Requests';
import About from './components/About';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <AppMenu/>
      {/* <BioStockHeader/> */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/requests' component={Requests}/>
        <Route exact path='/immunology' component={ImagesPage}/>
        <Route exact path='/about' component={About}/>
      </Switch>

      {/* <ImagesPage/> */}
      {/* <Requests/> */}
      <BioStockFooter/>
    </div>
    )
  }
}

export default App;
