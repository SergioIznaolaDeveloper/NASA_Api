import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/astronomy/neas/')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Neas</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item, i) => {
              return(
                <div key={i}>
                  <p >Designation: {item.designation}</p>
                  <p>Discovery date: {item.discovery_date}</p>
                  <p>h_mag: {item.h_mag}</p>
                  <p>Moid_Au: {item.moid_au}</p>
                  <p>q_au_1: {item.q_au_1}</p>
                  <p>q_au_2: {item.q_au_2}</p>
                  <p>period year: {item.period_yr}</p>
                  <p>i_deg: {item.i_deg}</p>
                  <p>pha: {item.pha}</p>
                  <p>Orbit class: {item.orbit_class}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;
