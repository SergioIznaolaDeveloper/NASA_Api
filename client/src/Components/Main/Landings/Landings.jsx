import React, { useEffect, useState } from 'react'
import Landing from './Landing'
import Leaflet from '../../../hooks/leaflet'


export default function Landings2() {
  const [list, setList] = useState([])
  
  useEffect(() => {getList()} , [list])
  
  const getList = () => {
    fetch("/api/astronomy/landings/mass/")
      .then((res) => res.json())
      .then((list) => setList( list ));
  };
return (
  <div className="landings">
  <h1>Landings map</h1>
  <Leaflet data={list}/>
  <h1>List of Landings</h1>
  <Landing data={list} />
</div>
)
}
