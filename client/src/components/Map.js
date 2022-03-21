import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useState, useEffect} from "react"
import L from 'leaflet'
import '../App.css';

function Map() {

const [data, setData] = useState("");
const [lat, setLat] = useState("")
const [long, setLong] = useState("")
 


useEffect(()=>{
  async function fetchData(){
  let popup = await fetch('http://localhost:5000')
  const popUpData = await popup.json();
  setData(popUpData)
//  console.log(popup);
//  console.log(popUpData)

//these do not work to set latitude and longitutue
// setLat(data[1].Latitude)
// setLong(data[1].Longitude)
// console.log(lat)
// console.log(long)

//This works to show the data and ID
 //console.log(data[0].ID)
}
fetchData();
},[])

// let id = data[1].Latitude;
// console.log(id)

//This also work to show lat/long
//  console.log(data[1]["Latitude"],data[1]["Longitude"])

  return (

    <MapContainer center={[44.642635512486834, -72.83265664192449]} zoom={13} style={{height: "70vh", width: "70vw", margin:"auto"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* {L.latLng(lat, long)} */}
  {/* Marker positions are hardcoded since the above does not work, and the other comments in UseEffect do not work */}
  <Marker position= {[44.643660,-72.829120]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[44.643660, -72.830640]}>
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