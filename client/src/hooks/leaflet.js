import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'

export default function leaflet(props) {
  
   const getSunEuler = (date) =>{
    const now = date || new Date();

    // The boilerplate: fiddling with dates
    const soy = (new Date(now.getFullYear(), 0, 0)).getTime();
    const eoy = (new Date(now.getFullYear() + 1, 0, 0)).getTime();
    const nows = now.getTime();
    const poy = (nows - soy) / (eoy - soy);

    const secs = now.getUTCMilliseconds() / 1e3
            + now.getUTCSeconds()
            + 60 * (now.getUTCMinutes() + 60 * now.getUTCHours());
    const pod = secs / 86400; // leap secs? nah.

    // The actual magic
    const lat = (-pod + 0.5) * Math.PI * 2;
    const lon = Math.sin((poy - .22) * Math.PI * 2) * .41;

    return ([lat, lon]);
}

const getIcon = (_iconSize) => {
  return L.icon({
    iconUrl: require("../Static/Icons/asteroide.png"),
    iconSize: [20],
  });
}
const getIconH = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/H6.png"),
    iconSize: [20],
  });
}
const getIconL = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/L6.png"),
    iconSize: [20],
  });
}
const getIconDio = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/diogenite.png"),
    iconSize: [20],
  });
}
const getIconVar = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/undefined.png"),
    iconSize: [20],
  });
}
const getIconSun = () => {
  return L.icon({
    iconUrl: require("../Static/Icons/sunny.png"),
    iconSize: [60],
  });
}
  return (
    <MapContainer id="map" center={[getSunEuler()[0], 0]} zoom={3} scrollWheelZoom={false}>
    {props.data.map((item, i) => {
      {if(item.reclat && item.reclong !== undefined){
          if(item.recclass === "H6" || item.recclass === "H5" || item.recclass === "H3-5") {
            return (
          <Marker icon={getIconH()} key={i} position={[item.reclat, item.reclong]}><Popup>
          <p>Name: {item.name}</p>
              <p>Id: {item.id}</p>
              <p>Recclass: {item.recclass}</p>
              <p>Mass: {item.mass}</p>
              <p>Year: {item.year}</p>
              <p>Latitude: {item.reclat}</p>
              <p>Longitude: {item.reclong}</p>
          </Popup></Marker>)
        
    } else if (item.recclass === "L6"  || item.recclass === "L5" || item.recclass === "LL5" || item.recclass === "LL6" || item.recclass === "LL4" || item.recclass === "L4") {
      return (
        <Marker icon={getIconL()} key={i} position={[item.reclat, item.reclong]}><Popup>
        <p>Name: {item.name}</p>
            <p>Id: {item.id}</p>
            <p>Recclass: {item.recclass}</p>
            <p>Mass: {item.mass}</p>
            <p>Year: {item.year}</p>
            <p>Latitude: {item.reclat}</p>
            <p>Longitude: {item.reclong}</p>
        </Popup></Marker>)
    } else if (item.recclass === "Diogenite" || item.recclass === "Diogenite-pm") {
      return (
        <Marker icon={getIconDio()} key={i} position={[item.reclat, item.reclong]}><Popup>
        <p>Name: {item.name}</p>
            <p>Id: {item.id}</p>
            <p>Recclass: {item.recclass}</p>
            <p>Mass: {item.mass}</p>
            <p>Year: {item.year}</p>
            <p>Latitude: {item.reclat}</p>
            <p>Longitude: {item.reclong}</p>
        </Popup></Marker>)
    } else if (item.recclass === "Aubrite" || item.recclass === "C" || item.recclass === "Unknown" || item.recclass === "Pallasite"  || item.recclass === "Eucrite-mmict") {
      return (
        <Marker icon={getIconVar()} key={i} position={[item.reclat, item.reclong]}><Popup>
        <p>Name: {item.name}</p>
            <p>Id: {item.id}</p>
            <p>Recclass: {item.recclass}</p>
            <p>Mass: {item.mass}</p>
            <p>Year: {item.year}</p>
            <p>Latitude: {item.reclat}</p>
            <p>Longitude: {item.reclong}</p>
        </Popup></Marker>)
    }else { 
      return (
      <Marker icon={getIcon()} key={i} position={[item.reclat, item.reclong]}>              <Popup>
          <p>Name: {item.name}</p>
              <p>Id: {item.id}</p>
              <p>Recclass: {item.recclass}</p>
              <p>Mass: {item.mass}</p>
              <p>Year: {item.year}</p>
              <p>Latitude: {item.reclat}</p>
              <p>Longitude: {item.reclong}</p>
          </Popup></Marker>
      )
        }
      }}
    })}
    <Marker icon={getIconSun()} position={[getSunEuler()[0], getSunEuler()[1]]}>
          <Popup>
          <p>Name: Sun</p>
              <p>Latitude: {getSunEuler()[0]}</p>
              <p>Longitude: {getSunEuler()[1]}</p>
          </Popup>
          </Marker>
    </MapContainer>
  )
}
