import React, { Component } from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.getList();
  }

  getSunEuler(date) {
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


  getIcon(_iconSize) {
    return L.icon({
      iconUrl: require("../../../Static/Icons/asteroide.png"),
      iconSize: [20],
    });
  }
  getIconH6(){
    return L.icon({
      iconUrl: require("../../../Static/Icons/H6.png"),
      iconSize: [20],
    });
  }
  getIconL6(){
    return L.icon({
      iconUrl: require("../../../Static/Icons/L6.png"),
      iconSize: [20],
    });
  }
  getIconDio(){
    return L.icon({
      iconUrl: require("../../../Static/Icons/diogenite.png"),
      iconSize: [20],
    });
  }
  getIconSun(_iconSize) {
    return L.icon({
      iconUrl: require("../../../Static/Icons/sunny.png"),
      iconSize: [60],
    });
  }
  // Fetch the list on first mount


  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/api/astronomy/landings/mass/")
      .then((res) => res.json())
      .then((list) => this.setState({ list }));
  };

  render() {
    const { list } = this.state;
    return (
      <div className="landings">
        <h1>List of Landings</h1>
        <MapContainer id="map" center={[0, 0]} zoom={3} scrollWheelZoom={false}>
        {list.map((item, i) => {
          {if(item.reclat && item.reclong !== undefined){
              if(item.recclass === "H6" || item.recclass === "H5") {
                return (
              <Marker icon={this.getIconH6()} key={i} position={[item.reclat, item.reclong]}><Popup>
              <p>Name: {item.name}</p>
                  <p>Id: {item.id}</p>
                  <p>Recclass: {item.recclass}</p>
                  <p>Mass: {item.mass}</p>
                  <p>Year: {item.year}</p>
                  <p>Latitude: {item.reclat}</p>
                  <p>Longitude: {item.reclong}</p>
              </Popup></Marker>)
            
        } else if (item.recclass === "L6"  || item.recclass === "L5" || item.recclass === "LL5" ) {
          return (
            <Marker icon={this.getIconL6()} key={i} position={[item.reclat, item.reclong]}><Popup>
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
            <Marker icon={this.getIconDio()} key={i} position={[item.reclat, item.reclong]}><Popup>
            <p>Name: {item.name}</p>
                <p>Id: {item.id}</p>
                <p>Recclass: {item.recclass}</p>
                <p>Mass: {item.mass}</p>
                <p>Year: {item.year}</p>
                <p>Latitude: {item.reclat}</p>
                <p>Longitude: {item.reclong}</p>
            </Popup></Marker>)
        } else { 
          return (
          <Marker icon={this.getIcon()} key={i} position={[item.reclat, item.reclong]}>              <Popup>
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
        <Marker icon={this.getIconSun()} position={[this.getSunEuler()[0], this.getSunEuler()[1]]}>
              <Popup>
              <p>Name: Sun</p>
                  <p>Latitude: {this.getSunEuler()[0]}</p>
                  <p>Longitude: {this.getSunEuler()[1]}</p>
              </Popup>
              </Marker>
        </MapContainer>

        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item, i) => {
              return (
                <div key={i}>
                  <p>Name: {item.name}</p>
                  <p>Id: {item.id}</p>
                  <p>Recclass: {item.recclass}</p>
                  <p>Mass: {item.mass}</p>
                  <p>Year: {item.year}</p>
                  <p>Latitude: {item.reclat}</p>
                  <p>Longitude: {item.reclong}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default List;
