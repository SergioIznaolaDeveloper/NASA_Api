import React, { Component } from "react";
class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }


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
        <div id="map"></div>
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
