import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { LandingContext } from "../../../../Context/LandingContext"

export default function FormC() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
   }
  return (
    <form className='formPost' onSubmit={handleSubmit(onSubmit)}>
    <h1>CREATE YOUR OWN LANDING</h1>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="name">Name:</label>
    <input {...register("name", { required: true, minLength: 3})} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="mass">Mass:</label>
    <input type="number"{...register("mass", { required: true, minLength:2, maxLength: 8})} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="class">Class:</label>
    <select placeholder="Fire"{...register("type")} className="fLandings__input">
        <option value="H">H</option>
        <option value="H4">H4</option>
        <option value="H5">H5</option>
        <option value="H6">H6</option>
        <option value="L">L</option>
        <option value="L4">L4</option>
        <option value="L5">L5</option>
        <option value="L6">L6</option>
        <option value="LL5">LL5</option>
        <option value="C">C</option>
        <option value="Diogenite">Diogenite</option>
        <option value="Ureilite-an">UreiliteAn</option>
        <option value="Eucrite-mmict">EucriteMmict</option>
        <option value="Eucrite-pmict">EucritePmict</option>
        <option value="Aubrite">Aubrite</option>
        <option value="Stone-uncl">StoneUncl</option>
        <option value="Diogenite-pm">DiogenitePm</option> 
    </select>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="id">Id:</label>
    <input type="number"{...register("id", { required: true, minLength: 3, maxLength: 5 })} className="fLandings__input"/>
    </div>
    </div>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="year">Year:</label>
    <input type="number" {...register("year", { required: true, minLength: 4, maxLength:4 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="latitude">Latitude:</label>
    <input type="number" {...register("latitude", { required: true, minLength: 1, maxLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="longitude">Longitude:</label>
    <input type="number" {...register("longitude", { required: true, minLength: 1, maxLength: 3 })} className="fLandings__input"/>
    </div>
    <button className="formPost__button">ADD LANDING</button>
    </div>
    <section className=" form__errors">
    {errors.name?.type?<p>Name is required, min length: 3</p>: null}
    {errors.mass?.type?<p>Mass is required, length: 3-8</p>: null}
    {errors.id?.type?<p>Id is required, length: 4-8</p>: null}
    {errors.year?.type?<p>Year is required, length: 4</p>: null}
    {errors.latitude?.type?<p>Latitude is required, length: 1-3</p>: null}
    {errors.longitude?.type?<p>Longitude is required, length: 1-3</p>: null}
    </section>
    </form>
  )
}
