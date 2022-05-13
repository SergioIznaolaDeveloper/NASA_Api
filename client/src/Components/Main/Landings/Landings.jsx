import React, { useEffect, useState, useContext } from 'react'
import Landing from './Landing'
import FilterLandings from './FilterLandings';
import Leaflet from '../../../hooks/leaflet'
import { LandingContext } from "../../../Context/LandingContext";
import { NavigatorContext } from "../../../Context/NavigatorContext";


export default function Landings() {
  const [list, setList] = useState([])
  const {landingInputs, pagination, orderBy} = useContext(LandingContext);
  const {setNavActive} = useContext(NavigatorContext);

  useEffect(() => {
    setNavActive("landings");
    getList()
  } , [landingInputs, pagination, orderBy])

  const getList = () => {
    if (landingInputs.length >= 4) {
      setList([""])
    }
    if(landingInputs[0] === "" || landingInputs[1] === ""){
      if(orderBy===""){
        fetch(`/api/astronomy/landings/mass/`)
        .then((res) => res.json())
        .then((list) => setList(list))
      } else {
        fetch(`/api/astronomy/landings/?order=${orderBy}`)
        .then((res) => res.json())
        .then((list) => setList(list))
      }
  } else if (landingInputs[0] === "from" && landingInputs[2] === "to"){
    if(orderBy===""){
    fetch(`/api/astronomy/landings?from=${landingInputs[1]}&to=${landingInputs[3]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
  } else {
    fetch(`/api/astronomy/landings?from=${landingInputs[1]}&to=${landingInputs[3]}&order=${orderBy}`)
    .then((res) => res.json())
    .then((list) => setList(list))
  }
  } else if (landingInputs[0] === "to" && landingInputs[2] === "from"){
    if(orderBy===""){
    fetch(`/api/astronomy/landings?from=${landingInputs[3]}&to=${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list)) 
    } else {
    fetch(`/api/astronomy/landings?from=${landingInputs[3]}&to=${landingInputs[1]}&order=${orderBy}`)
    .then((res) => res.json())
    .then((list) => setList(list))
    } 
  } else if (landingInputs[0] === "from"){
    if(orderBy===""){
    fetch(`/api/astronomy/landings?from=${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list)) 
    } else {
    fetch(`/api/astronomy/landings?from=${landingInputs[1]}&order=${orderBy}`)
    .then((res) => res.json())
    .then((list) => setList(list))
    } 
  } else if (landingInputs[0] === "to" ){
    if(orderBy===""){
    fetch(`/api/astronomy/landings?to=${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list)) 
    } else {
    fetch(`/api/astronomy/landings?to=${landingInputs[1]}&order=${orderBy}`)
    .then((res) => res.json())
    .then((list) => setList(list))
    } 
  } else if (landingInputs[0] === "mass" && landingInputs[1] !== ""){
    if(orderBy===""){
    fetch(`/api/astronomy/landings/mass/${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
    } else {
      fetch(`/api/astronomy/landings/mass/${landingInputs[1]}/${orderBy}`)
      .then((res) => res.json())
      .then((list) => setList(list))
    }
  } else if (landingInputs[0] === "class" && landingInputs[1] !== ""){
    if(orderBy===""){
    fetch(`/api/astronomy/landings/class/${landingInputs[1]}`)
    .then((res) => res.json())
    .then((list) => setList(list))
    } else {
      fetch(`/api/astronomy/landings/class/${landingInputs[1]}/${orderBy}`)
      .then((res) => res.json())
      .then((list) => setList(list))
    }
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