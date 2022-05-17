import React, { useEffect, useState, useContext } from 'react'
import Landing from './Landing'
import FilterLandings from './FilterLandings';
import Leaflet from '../../../hooks/leaflet'
import FetchLandings from '../../../hooks/fetchLandings'
import { LandingContext } from "../../../Context/LandingContext";
import { NavigatorContext } from "../../../Context/NavigatorContext";
import { Post } from '../../../Context/Post';
export default function Landings() {
  const [list, setList] = useState([])
  const {setLandingInputs, landingInputs, pagination, orderBy} = useContext(LandingContext);
  const { putEdit } = useContext(Post)
  const {setNavActive} = useContext(NavigatorContext);

  useEffect(() => {
    setNavActive("landings"); // set navbar active
    FetchLandings(landingInputs, orderBy, setList, setLandingInputs) // hook to fetch landings
  } , [landingInputs, pagination, orderBy, putEdit])

return (
  <div className="landings">
  <Leaflet data={list}/>
  <FilterLandings data={orderBy}/>
  <Landing data={list} />
</div>
)
}

// list.slice(pagination.first, pagination.last)