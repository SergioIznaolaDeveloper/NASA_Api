import React, { useEffect, useState, useContext } from 'react'
import Nea from './Nea'
import FilterNeas from './FilterNeas';
import LeafletN from '../../../hooks/leafletN'
import FetchNeas from '../../../hooks/fetchNeas'
import { NeasContext } from "../../../Context/NeasContext";
import { NavigatorContext } from "../../../Context/NavigatorContext";
import { Post } from '../../../Context/Post';

export default function Neas() {
  const [list, setList] = useState([])
  const {neasInputs, pagination, orderBy, setNeasInputs} = useContext(NeasContext);
  const {putEdit } = useContext(Post)
  const {setNavActive} = useContext(NavigatorContext);
  useEffect(() => {
    setNavActive("neas"); // set navbar active
    FetchNeas(neasInputs, orderBy, setList, setNeasInputs) // hook to fetch Neas
  } , [neasInputs, pagination, orderBy, putEdit])

return (
  <div className="neas">
  <LeafletN data={list}/>
  <FilterNeas data={orderBy}/>
  <Nea data={list} />
</div>
)
}

// list.slice(pagination.first, pagination.last)