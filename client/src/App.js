import React from 'react';
import Map from './components/Map';
import './Style/App.css';
import Resturants from './components/Resturants';

function App() {
  return (
    <>
   {/* Main header for the page */}
    <h1>Jeffersonville Yelpington</h1>
    {/* Importing resturants button component */}
    <Resturants/>
    {/* Importing map component */}
    <Map/>
  
</>
  );
}

export default App;
