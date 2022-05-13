import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { LandingContext } from "../../../../Context/LandingContext"

export default function FormC() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

console.log(register)
  return (
    <form className='formPost'>
    <h1>CREATE YOUR OWN LANDING</h1>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="name">Name:</label>
    <input {...register("name", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="mass">Mass:</label>
    <input {...register("mass", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="class">Class:</label>
    <input {...register("class", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="id">Id:</label>
    <input {...register("id", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    </div>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="year">Year:</label>
    <input {...register("year", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="latitude">Latitude:</label>
    <input {...register("latitude", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="longitude">Longitude:</label>
    <input {...register("longitude", { required: true, minLength: 3 })} className="fLandings__input"/>
    </div>
    <button value="mass"  className="formPost__button">ADD LANDING</button>
    </div>
    </form>
  )
}
