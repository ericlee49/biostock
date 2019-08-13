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

import {Route, Switch, Link} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";




import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});



class App extends React.Component {

  // Previous location for gallery check (open modal or page)
  previousLocation = this.props.location;

  componentWillMount(nextProps) {
    let {location} = this.props;


    // if there is nothing on the stack AND if there is no state, set previous location to current location
    // if (
    //   (!location.state || !location.state.modal)
    // ) {
    //   this.previousLocation = this.props.location;
    // }
    console.log(location);
  }

  render() {
    let {location} = this.props;

    // let isModal = !!(
    //   location.state && location.state.modal && this.previousLocation !== location
    // );
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppMenu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/requests' component={Requests}/>
          <Route path='/images/:category' component={ImagesPage}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/soon' component={Soon}/>
        </Switch>
        {/* <Switch location={isModal ? this.previousLocation : location}>
          <Route path='/gallery/:category' component={Gallery}/> 
          <Route path='/img/:id' component={ImageSoloPage}/>       
        </Switch> */}
        {/* {isModal ? <Route path='/img/:id' component={Soon} /> : null} */}

        {/* <ImagesPage/> */}
        {/* <Requests/> */}
        <BioStockFooter/>
      </div>    
    </ApolloProvider>
    )
  }
}

export default App;
