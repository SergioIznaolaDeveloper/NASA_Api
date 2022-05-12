import React, {useContext} from 'react'
import { LandingContext } from "../../../../Context/LandingContext";


export default function Landing(props) {
  const {nextPage, prevPage} = useContext(LandingContext);
  
  return ( 
    <div>{/* Check to see if any items are found*/}
      <div className='pagination__container'>
        <button onClick={prevPage} className='back__button'></button>
        <button onClick={nextPage} className='next__button'></button>
      </div>
    {props.data.length ? (
      <div className="landings__container">
        {/* Render the props.data of items */}
        {props.data.map((item, i) => {
          return (
            <div className="landing" key={i}>
              <div className="id-img">
                <p className='landing__id'>#{i+1}</p>
                {item.recclass === "H6" || item.recclass === "H5" || item.recclass === "H3-5" || item.recclass === "H" || item.recclass === "H4" ? 
                <div className="landing__imgH"></div> 
                : item.recclass === "L6"  || item.recclass === "L5" || item.recclass === "LL5" || item.recclass === "LL6" || item.recclass === "LL4" || item.recclass === "L4" 
                  ? <div className="landing__imgL"></div>
                  : item.recclass === "Diogenite" || item.recclass === "Diogenite-pm" 
                  ? <div className="landing__imgD"></div>
                    : item.recclass === "Aubrite" || item.recclass === "C" || item.recclass === "Unknown" || item.recclass === "Pallasite"  || item.recclass === "Eucrite-mmict" || item.recclass === "Ureilite-an" || item.recclass === "Eucrite-pmict"
                    ?<div className="landing__imgVar"></div>
                    : <div className="landing__img"></div>}
                </div>
              <div className="landing__container-info">
              <div className='data-data'>
                <p className="landing__info-t">Name:</p>
                <p className="landing__info">{item.name}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Mass: </p>
                <p className="landing__info">{item.mass}</p>
              </div>
              
              <div className='data-data'>
                <p className="landing__info-t">Id:</p>
                <p className="landing__info">{item.id}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Recclass:</p>
                <p className="landing__info">{item.recclass}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Year: </p>
                <p className="landing__info">{item.year}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Latitude: </p>
                <p className="landing__info">{item.reclat}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Longitude: </p>
                <p className="landing__info">{item.reclong}</p>
              </div>
              <form action={`/api/astronomy/landings/delete/${item.id}`}method='POST'>
                <button className='landing__button'>DESTROY LANDING</button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <div className='charging'></div>
      </div>
    )}</div>
  )
}
