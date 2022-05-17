import React, {useContext, useEffect, useState} from 'react'
import { NeasContext } from "../../../../Context/NeasContext";
import FormEdit from './FormEdit/FormEdit';
const urlDelete = process.env.REACT_APP_URL_DELETE_N
export default function Nea(props) {
  const {nextPage, prevPage, pagination} = useContext(NeasContext);
  const [tenToTen, setTenToTen] = useState([])
  const [edit, setEdit] = useState(false)
  const [info, setInfo] = useState(false)
  
  useEffect(() => {
    setTenToTen(props.data.slice(pagination.first, pagination.last))
  } , [props])
  
  const buttonEdit = () => {
    edit === false ? setEdit(true) : setEdit(false)
  }
  const buttonInfo = () => {
    info === false ? setInfo(true) : setInfo(false)
  }

  return ( 
    <section className='pag-land__container'>{/* Check to see if any items are found*/}
     
      <div className='more-edit'>
      {info === false
      ? <button className='landing__button-info' onClick={buttonInfo}>MORE INFO</button>
        :<button className='landing__button-info' onClick={buttonInfo}>CLOSE INFO</button>
    }
    {edit === false
    ? <button className='landing__button' onClick={buttonEdit}>EDIT NEAS</button>
    : <button className='landing__button' onClick={buttonEdit}>CLOSE EDITION</button>
    }
      
      </div>
      <div className='pagination__container'>
        {tenToTen.length !== 0
        ? pagination.first === 0
          ? pagination.last + tenToTen.length === props.data.length 
            ?<><></></>
            :<><></></>
          : <><div onClick={prevPage} className='arrow-L'></div><p className='pagination__number'>{pagination.first}</p></>
        : <></>}
        { tenToTen.length === 10
        ? pagination.last < tenToTen.length
          ? <><></></>
          : <><p className='pagination__number'>{pagination.last}</p><div onClick={nextPage} className='arrow-R'></div></>
        : <><></></>}
      </div>
    {tenToTen.length ? (
      <div className="landings__container">
        {/* Render the props.data of items */}
        {tenToTen.map((item, i) => {
          return (
            <div className="landing" key={i}>
              <div className="id-img">
                <p className='landing__id'>#{i+1+pagination.first}</p>
                {item.orbit_class === "Apollo" ? 
                <div className="landing__imgH"></div> 
                : item.orbit_class === "Amor" 
                  ? <div className="landing__imgL"></div>
                  : item.orbit_class === "Aten"  
                    ? <div className="landing__imgVar"></div>
                    :<div className="landing__imgVar"></div>
                   }
                </div>
              <div className="landing__container-info">
              {edit === true ? 
              ( <FormEdit data={item} state={buttonEdit} />
              ) : (
                <>
                <div className='data-data'>
                <p className="landing__info-t">Name:</p>
                <p className="landing__info">{item.designation}</p>
              </div>
              <div className='data-data'>
                  <p className="landing__info-t">Orbit class:</p>
                  <p className="landing__info">{item.orbit_class}</p>
                </div>

              {info === true 
              ? ( 
                <div className="extended__info">
                <div className='data-data'>
                <p className="landing__info-t">Filter H:</p>
                <p className="landing__info">{item.h_mag}</p>
              </div>
                <div className='data-data'>
                  <p className="landing__info-t">Period year: </p>
                  <p className="landing__info">{item.period_yr}</p>
                </div>
                <div className='data-data'>
                  <p className="landing__info-t">Discovery date: </p>
                  <p className="landing__info">{item.discovery_date.slice(0,10)}</p>
                </div>
                <div className='data-data'>
                  <p className="landing__info-t">Latitude: </p>
                  <p className="landing__info">{item.q_au_1}</p>
                </div>
                <div className='data-data'>
                  <p className="landing__info-t">Longitude: </p>
                  <p className="landing__info">{item.q_au_2}</p>
                </div>
                </div>
              ):(
              <></>
              )}
              <form action={`${urlDelete}/${item.designation}`}method='POST'>
                <button className='landing__button'>DESTROY NEA</button>
              </form>
            </>
              )}
              </div> 
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <div className='charging'></div>
      </div>
    )}</section>
  )
}
