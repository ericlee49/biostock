import React from 'react';

import BioStockFooter from './components/Footer';
import AppMenu from './components/AppMenu';
import ImagesPage from './components/ImagesPage';
import Home from './components/Home';
import Requests from './components/Requests';
import About from './components/About';
import Soon from './components/Soon';
import Gallery from './components/Gallery';
import ImageSoloPage from './components/ImageSoloPage';

import {Route, Switch} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";


import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});

class App extends React.Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppMenu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/requests' component={Requests}/>
          <Route path='/images/:category' component={ImagesPage}/>
          <Route path='/gallery/:category' component={Gallery}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/soon' component={Soon}/>
          <Route path='/img/:id' component={ImageSoloPage}/>
        </Switch>

        {/* <ImagesPage/> */}
        {/* <Requests/> */}
        <BioStockFooter/>
      </div>    
    </ApolloProvider>
    )
  }
}

export default App;
