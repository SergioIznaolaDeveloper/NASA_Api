import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'


//function to genearate coordenadas
export default function leafletN(props) {
const fecha = new Date();
const coordenadas = (distance, period) => {
const startD = Math.random() * (30 - 1) + 1;
const startM = Math.random() * (12 - 1) + 1;
 const fecha = new Date();
 let month = fecha.getMonth() + 1;
 let day = fecha.getDate();
 const date = ((month-1) * 30 + day)/365
 const inicio = ((startM-1) * 30 + startD)/365
 const vMedia = (360/period)
 const desfase = date - inicio
 const anomaliaM = vMedia * desfase
const anomaliaRad = anomaliaM * Math.PI / 180
 const x = distance * Math.cos(anomaliaRad)
 const y = distance * Math.sin(anomaliaRad)
 return [x, y]
}


const getIcon = (_iconSize) => {
  return L.icon({
    iconUrl: require("../Static/Icons/asteroide.gif"),
    iconSize: [30],
  });
}
const getIconH = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/H6.gif"),
    iconSize: [30],
  });
}
const getIconL = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/L6.gif"),
    iconSize: [40],
  });
}
const getIconDio = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/diogenite.gif"),
    iconSize: [30],
  });
}
const getIconVar = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/undefined.gif"),
    iconSize: [30],
  });
}
const getIconSun = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/sun.gif"),
    iconSize: [150],
  });
}
const getIconTierra = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/tierra.gif"),
    iconSize: [40],
  });
}
const getIconMarte = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/marte.gif"),
    iconSize: [50],
  });
}
const getIconJupiter = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/jupiter.gif"),
    iconSize: [80],
  });
}
const getIconSaturno = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/saturno.gif"),
    iconSize: [200],
  });
}

  return (
    <MapContainer id="map" center={[0, 0]} zoom={5} scrollWheelZoom={false} >
    {props.data.map((item, i) => {
      {if(item.q_au_1 && item.q_au_2 !== undefined){
          if(item.orbit_class === "Apollo") {
            return (
          <Marker icon={getIconH()} key={i} position={[coordenadas(item.q_au_2,item.period_yr)[0]*10,coordenadas(item.q_au_2,item.period_yr)[1]*10]}><Popup >
          <p>designation: {item.designation}</p>
              <p>orbit_class: {item.orbit_class}</p>
              <p>discovery_date: {(item.discovery_date).slice(0,10)}</p>
              <p>period_yr: {item.period_yr}</p>
              {/* <p>Latitude: {item.q_au_1}</p> */}
              <p>Distance to sun: {item.q_au_2}</p>
          </Popup></Marker>)
    } else if (item.orbit_class === "Amor") {
      return (
        <Marker icon={getIconL()} key={i} position={[coordenadas(item.q_au_2,item.period_yr)[0]*10,coordenadas(item.q_au_2,item.period_yr)[1]*10]}><Popup>
        <p>designation: {item.designation}</p>
            <p>orbit_class: {item.orbit_class}</p>
            <p>discovery: {(item.discovery_date).slice(0,10)}</p>
            <p>period_yr: {item.period_yr}</p>
            {/* <p>Latitude: {item.q_au_1}</p> */}
            <p>Distance to sun: {item.q_au_2}</p>
        </Popup></Marker>)
    } else if (item.orbit_class === "Aten" ) {
      return (
        <Marker icon={getIconVar()} key={i} position={[coordenadas(item.q_au_2,item.period_yr)[0]*10,coordenadas(item.q_au_2,item.period_yr)[1]*10]}><Popup>
        <p>designation: {item.designation}</p>
            <p>orbit_class: {item.orbit_class}</p>
            <p>discovery: {(item.discovery_date).slice(0,10)}</p>
            <p>period_yr: {item.period_yr}</p>
            {/* <p>Latitude: {item.q_au_1}</p> */}
            <p>Distance to sun: {item.q_au_2}au</p>
        </Popup></Marker>)
    } else { 
      return (
      <Marker icon={getIcon()} key={i} position={[coordenadas(item.q_au_2,item.period_yr)[0]*10,coordenadas(item.q_au_2,item.period_yr)[1]*10]}><Popup>
          <p>designation: {item.designation}</p>
              <p>orbit_class: {item.orbit_class}</p>
              <p>discovery: {(item.discovery_date).slice(0,10)}</p>
              <p>period_yr: {item.period_yr}</p>
              {/* <p>Latitude: {item.q_au_1}</p> */}
              <p>Distance to sun: {item.q_au_2}au</p>
          </Popup></Marker>
      )
        }
      }}
    })}
    <Marker icon={getIconSun()} position={[1, 0]}>
          <Popup>
          <p>designation: Sun</p>
              <p>Latitude: {0}</p>
              <p>Longitude: {0}</p>
          </Popup>
          </Marker>
          <Marker icon={getIconTierra()} position={[0,10]}>
          <Popup>
          <p>designation: Tierra</p>
              <p>Latitude: {coordenadas(1,1)[0]*10}</p>
              <p>Longitude: {coordenadas(1,1)[0]*10}</p>
              <p>Distance to sun: {1}au</p>
          </Popup>
          </Marker>
          <Marker icon={getIconMarte()} position={[coordenadas(1.5,1)[0]*10,coordenadas(1.5,1)[1]*10]}>
          <Popup>
          <p>designation: Marte</p>
              <p>Latitude: {[coordenadas(1.5,1)[0]]}</p>
              <p>Longitude: {[coordenadas(1.5,1)[1]]}</p>

          </Popup>
          </Marker>
          <Marker icon={getIconJupiter()} position={[1, 50]}>
          <Popup>
          <p>designation: Tierra</p>
              <p>Latitude: {1}ua</p>
              <p>Longitude: {1}ua</p>
          </Popup>
          </Marker>
          <Marker icon={getIconSaturno()} position={[7, 95]}>
          <Popup>
          <p>designation: Tierra</p>
              <p>Latitude: {1}</p>
              <p>Longitude: {1}</p>
          </Popup>
          </Marker>
    </MapContainer>
  )
}
