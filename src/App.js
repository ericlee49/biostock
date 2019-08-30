import React from 'react';

import BioStockFooter from './components/Footer';
import AppMenu from './components/AppMenu';
import Home from './components/Home';
import Requests from './components/Requests';
import About from './components/About';
import Soon from './components/Soon';
import Gallery from './components/Gallery';
import ImageSoloPage from './components/ImageSoloPage';
import ImageModal from './components/ImageModal';

import {Route, Switch} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";




import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});



class App extends React.Component {

  // Previous location for gallery check (open modal or page)
  previousLocation = this.props.location;

  componentWillUpdate(nextProps){
    // get the location you are coming from
    let {location} = this.props;

    // if you are not coming to the page from a url AND you are not coming from a modal
    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)){
      this.previousLocation = this.props.location
    }
    console.log("componentwillupdate")
    console.log(nextProps);
    console.log("props")
    console.log(this.props);
  }

  render() {
    let {location} = this.props;
    // console.log('APP PROPS:');
    // console.log(this.props);

    // IS NOT A MODAL
    let isModal = !!(
      location.state && location.state.modal && this.previousLocation !== location
    );
    
    return (
    <ApolloProvider client={client}>
      <div className="App">

        <AppMenu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/requests' component={Requests}/>
          {/* <Route path='/images/:category' component={ImagesPage}/> */}
          <Route exact path='/about' component={About}/>
          <Route exact path='/soon' component={Soon}/>
          <Route path='/test/:id' component={ImageModal}/>
        </Switch>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path='/gallery/:category' component={Gallery}/> 
          <Route path='/img/:id' component={ImageSoloPage}/>       
        </Switch>
        {isModal ? <Route path='/img/:id' component={ImageModal} /> : null}
        <BioStockFooter/>
      </div>    
    </ApolloProvider>
    )
  }
}

export default App;
