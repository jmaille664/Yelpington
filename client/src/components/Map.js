import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useState, useEffect} from "react"
import '../Style/App.css';

function Map() {

// Use state for data 
 const [data, setData] = useState("");

//Fetching data from the server
useEffect(()=>{
  async function fetchData(){
  let popup = await fetch('http://localhost:5000')
  const popUpData = await popup.json();
  setData(popUpData)

}
fetchData();
},[])

  return (
// Marker center position 
    <MapContainer center={[44.642635512486834, -72.83265664192449]} zoom={13} style={{height: "70vh", width: "70vw", margin:"auto"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {/* Marker positions */}
  <Marker position={[44.643660,-72.829120]}>
    <Popup>
    My Favorite Things
    </Popup>
  </Marker>
  <Marker position={[44.643660, -72.830640]}>
    <Popup>
    Village Tavern
    </Popup>
  </Marker>
  <Marker position={[44.644960, -72.834140]}>
    <Popup>
    The Cupboard Deli
    </Popup>
  </Marker>
  <Marker position={[44.61087121631599, -72.81038875341217]}>
    <Popup>
    Martell's at the Red Fox
    </Popup>
  </Marker>
  <Marker position={[44.61087121631599, -72.81038875341217]}>
    <Popup>
    Martell's at the Red Fox
    </Popup>
  </Marker>
  <Marker position={[44.64600072196071, -72.88233208465354]}>
    <Popup>
    Rusty's Pizza and Pie
    </Popup>
  </Marker>
</MapContainer>
  );
}

export default Map;