import React, { useEffect, useState, useContext } from 'react'
import Landing from './Landing'
import FilterLandings from './FilterLandings';
import Leaflet from '../../../hooks/leaflet'
import { LandingContext } from "../../../Context/LandingContext";


export default function Landings() {
  const [list, setList] = useState([])
  const {landingInputs, pagination} = useContext(LandingContext);

  useEffect(() => {
    getList()
  } , [landingInputs, pagination])

  const getList = () => {
    if (landingInputs.length >= 4) {
      setList([""])
    }
    if(landingInputs[0] === "" || landingInputs[1] === ""){
    fetch(`/api/astronomy/landings/mass/`)
    .then((res) => res.json())
    .then((list) => setList(list))
  } else if (landingInputs[0] === "from" && landingInputs[2] === "to"){
    fetch(`/api/astronomy/landings?from=${landingInputs[1]}&to=${landingInputs[3]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
  } else if (landingInputs[0] === "to" && landingInputs[2] === "from"){
    fetch(`/api/astronomy/landings?from=${landingInputs[3]}&to=${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list)) 
  } else if (landingInputs[0] === "mass" && landingInputs[1] !== ""){
    fetch(`/api/astronomy/landings/mass/${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
    console.log(list)
  } else if (landingInputs[0] === "class" && landingInputs[1] !== ""){
    fetch(`/api/astronomy/landings/class/${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
  } else if (landingInputs[0] === "from" && landingInputs[1] !== ""){
    fetch(`/api/astronomy/landings/?from=${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
  } else if(landingInputs[0] === "to" && landingInputs[1] !== ""){
    fetch(`/api/astronomy/landings/?to=${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
  }  else {
    setLandingInputs([""])
  }
}
return (
  <div className="landings">
  <Leaflet data={list}/>
  <FilterLandings/>
  <Landing data={list} />
</div>
)
}

// list.slice(pagination.first, pagination.last)