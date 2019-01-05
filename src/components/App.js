import React from 'react';
import '../resources/styles.css';
import Header from '../components/header_footer/Header';
import Featured from '../components/featured';
import VenueInfo from '../components/venueinfo';
import Highlights from '../components/highlights';
import Pricing from '../components/pricing';
import Location from '../components/location';
import Footer from '../components/header_footer/footer';
class App extends React.Component {

  render () {
    return (
      <div className="App" >
        < Header />
        < Featured />
        < VenueInfo />
        < Highlights />
        < Pricing />
        < Location />
        < Footer />
      </div>
    );

  }
}

export default App;