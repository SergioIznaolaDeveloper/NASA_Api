import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'

export default function leaflet(props) {

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

  return (
    <MapContainer id="map" center={[40.4167, -3.70325]} zoom={5} scrollWheelZoom={false} ><TileLayer
    url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=ba96df09c7e745539d14b7b5008af08a"
  />
    {props.data.map((item, i) => {
      {if(item.reclat && item.reclong !== undefined){
          if(item.recclass === "H6" || item.recclass === "H5" || item.recclass === "H3-5" || item.recclass === "H" || item.recclass === "H4") {
            return (
          <Marker icon={getIconH()} key={i} position={[item.reclat, item.reclong]}><Popup >
          <p>Name: {item.name}</p>
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
            <p>Recclass: {item.recclass}</p>
            <p>Mass: {item.mass}</p>
            <p>Year: {item.year}</p>
            <p>Latitude: {item.reclat}</p>
            <p>Longitude: {item.reclong}</p>
        </Popup></Marker>)
    } else if (item.recclass === "Aubrite" || item.recclass === "C" || item.recclass === "Unknown" || item.recclass === "Pallasite"  || item.recclass === "Eucrite-mmict" || item.recclass === "Ureilite-an" || item.recclass === "Eucrite-pmict") {
      return (
        <Marker icon={getIconVar()} key={i} position={[item.reclat, item.reclong]}><Popup>
        <p>Name: {item.name}</p>
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
    </MapContainer>
  )
}
