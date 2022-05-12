import React, { useContext } from "react";
import {DebounceInput} from 'react-debounce-input';
import { LandingContext } from "../../../../Context/LandingContext";


export default function FilterLandings() {
  const {landingInputs, onChangeInputLMass, onChangeInputLClass, onChangeInputLFrom, onChangeInputLTo} = useContext(LandingContext);
  return (
  <form className="fLandings__form">
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="class">Landings CLASS</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="class"
    type="text"
    placeholder="Enter a class name..."
    value={landingInputs.class}
    onChange={onChangeInputLClass}
    ></DebounceInput>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="mass">Landings MASS</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="mass"
    type="text"
    placeholder="Enter a mass number..."
    value={landingInputs.mass}
    onChange={onChangeInputLMass}
    ></DebounceInput>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="from">Landings from</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="from"
    type="text"
    placeholder="Enter a year..."
    value={landingInputs.from}
    onChange={onChangeInputLFrom}
    ></DebounceInput>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="from">Landings to</label>
    <DebounceInput // boton con debounce de 1 segundo para no saturar la api
    debounceTimeout={1000}
    className="fLandings__input"
    name="to"
    type="text"
    placeholder="Enter a year..."
    value={landingInputs.to}
    onChange={onChangeInputLTo}
    ></DebounceInput>
    </div>
  </form> 
  )
}