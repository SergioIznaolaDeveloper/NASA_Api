import React, { useEffect, useState, useContext } from 'react'
import Landing from './Landing'
import Leaflet from '../../../hooks/leaflet'
import { NavigatorContext } from "../../../Context/NavigatorContext";

export default function Landings() {
  const [list, setList] = useState([])
  const {setNavActive} = useContext(NavigatorContext);

  useEffect(() => {
    setNavActive("landings");
    getList()
  } , [])

  const getList = () => {
    fetch("/api/astronomy/landings/mass/")
      .then((res) => res.json())
      .then((list) => setList( list ));
  };
return (
  <div className="landings">
  <Leaflet data={list}/>
  <h1>Filter landings</h1>
  <Landing data={list} />
</div>
)
}
