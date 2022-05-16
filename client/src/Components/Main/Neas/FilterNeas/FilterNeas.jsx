import React, { useContext } from "react";
import FormC from '../FormC';
import { DebounceInput } from 'react-debounce-input';
import { NeasContext } from "../../../../Context/NeasContext";

export default function FilterLandings(props) {
  const {onChangeOrderBy, create, onChangeInputLCreate, neasInputs, onChangeInputNorbit_class, onChangeInputNFilter, onChangeInputNFrom,
    onChangeInputNTo,} = useContext(NeasContext);
  return (
  <section className="fLandings__form">
  <div className="fLandings__head">
    <h1>FILTER NEA BY PARAMS:</h1>
    <button onClick={onChangeInputLCreate} value="create"  className="fLandings__button-create">CREATE NEW NEA</button>
  </div>
  <form className="fLandings__form-form1">
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="orbit_class">Nea ORBIT CLASS:</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="orbit_class"
    type="text"
    placeholder="Enter an orbit class type..."
    value={neasInputs.orbit_class}
    onChange={onChangeInputNorbit_class}
    ></DebounceInput>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="h_mag">Filter H:</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="h_mag"
    type="text"
    placeholder="Enter a filter H number..."
    value={neasInputs.h_mag}
    onChange={onChangeInputNFilter}
    ></DebounceInput>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="from">Neas from:</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="from"
    type="text"
    placeholder="Enter a discovery year..."
    value={neasInputs.from}
    onChange={onChangeInputNFrom}
    ></DebounceInput>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="from">Neas to:</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="to"
    type="text"
    placeholder="Enter a discovery year..."
    value={neasInputs.to}
    onChange={onChangeInputNTo}
    ></DebounceInput>
    </div>
  </form>
  <div className="fLandings__button-container">
    {props.data === "h_mag"
    ? <button  value="h_mag" className="fLandings__button-active">ORDER BY FILTER H</button>
    : <button  value="h_mag" onClick={onChangeOrderBy} className="fLandings__button">ORDER BY FILTER H</button>}
    {props.data === "designation"
    ? <button  value="designation"onClick={onChangeOrderBy} className="fLandings__button-active">ORDER BY NAME</button>
    : <button  value="designation" onClick={onChangeOrderBy} className="fLandings__button">ORDER BY NAME</button>}
    {props.data === "orbit_class"
    ? <button  value="orbit_class" onClick={onChangeOrderBy} className="fLandings__button-active">ORDER BY ORBIT CLASS</button>
    :<button  value="orbit_class"onClick={onChangeOrderBy} className="fLandings__button">ORDER BY ORBIT CLASS</button>}
    {props.data === "period_yr"
    ? <button value="period_yr" onClick={onChangeOrderBy} className="fLandings__button-active">ORDER BY PERIOD YEAR</button>
    : <button value="period_yr" onClick={onChangeOrderBy} className="fLandings__button">ORDER BY PERIOD YEAR</button>
    }
    
  </div>
  {create===true
  ?<FormC/>
  :<></>
  }
  </section>
  )
}
