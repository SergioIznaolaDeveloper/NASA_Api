import React, { useEffect, useState, useContext } from 'react'
import Landing from './Landing'
import FilterLandings from './FilterLandings';
import FormC from './FormC';
import Leaflet from '../../../hooks/leaflet'
import FetchLandings from '../../../hooks/fetchLandings'
import { LandingContext } from "../../../Context/LandingContext";
import { NavigatorContext } from "../../../Context/NavigatorContext";


export default function Landings() {
  const [list, setList] = useState([])
  const {landingInputs, pagination, orderBy} = useContext(LandingContext);
  const {setNavActive} = useContext(NavigatorContext);

  useEffect(() => {
    setNavActive("landings"); // set navbar active
    FetchLandings(landingInputs, orderBy, setList) // hook to fetch landings
  } , [landingInputs, pagination, orderBy])

return (
  <div className="landings">
  <Leaflet data={list}/>
  <FilterLandings/>
  <Landing data={list} />
</div>
)
}

// list.slice(pagination.first, pagination.last)