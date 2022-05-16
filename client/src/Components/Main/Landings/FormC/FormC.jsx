import axios from 'axios';
import React, {useContext } from 'react'
import { useForm } from "react-hook-form";
import { LandingContext } from "../../../../Context/LandingContext"
import { Post } from "../../../../Context/Post"
const urlCreate = process.env.REACT_APP_URL_CREATE_L
export default function FormC() {
  console.log("create "+urlCreate)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { setPostCreate, postCreate } = useContext(Post)
  const { setCreate } = useContext(LandingContext)
  

  const onSubmit = async d => {
  try{
  setPostCreate(d)
  const res = await axios.post(`${urlCreate}/${d.name}/${d.id}/${d.recclass}/${d.mass}/${d.year}/${d.reclat}/${d.reclong}`)
  const data = await res.data;
  console.log(data)
  reset()
  setTimeout(() => {setPostCreate(""), setCreate(false)}, 5000) // oculta formulario y landing añadida
  }catch(err){
  console.log(err)
  }
  };
return (
  <>
    <form className='formPost' onSubmit={handleSubmit(onSubmit)}>
    <h1>CREATE YOUR OWN LANDING</h1>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="name">Name:</label>
    <input {...register("name", { required: true, minLength: 3})} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="id">Id:</label>
    <input type="number"{...register("id", { required: true, minLength: 3, maxLength: 5 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="recclass">Class:</label>
    <select placeholder="Fire"{...register("recclass")} className="fLandings__input">
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
    <label className="fLandings__label" htmlFor="mass">Mass:</label>
    <input type="number"{...register("mass", { required: true, minLength:2, maxLength: 8})} className="fLandings__input"/>
    </div>
    

    </div>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="year">Year:</label>
    <input type="number" {...register("year", { required: true, minLength: 4, maxLength:4 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="latitude">Latitude:</label>
    <input type="number" {...register("reclat", { required: true, minLength: 1, maxLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="longitude">Longitude:</label>
    <input type="number" {...register("reclong", { required: true, minLength: 1, maxLength: 3 })} className="fLandings__input"/>
    </div>
    <button className="formPost__button">ADD LANDING</button>
    </div>
    <section className="form__errors">
    {errors.name?.type?<p>Name is required, min length: 3</p>: null}
    {errors.mass?.type?<p>Mass is required, length: 3-8</p>: null}
    {errors.id?.type?<p>Id is required, length: 4-8</p>: null}
    {errors.year?.type?<p>Year is required, length: 4</p>: null}
    {errors.latitude?.type?<p>Latitude is required, length: 1-3</p>: null}
    {errors.longitude?.type?<p>Longitude is required, length: 1-3</p>: null}
    </section>
    
    </form>
    {postCreate.name 
    ? (
      <>
    <h2 className='created__title'>LANDING CREATED</h2>
    <div className='recent_landing'>
      <div className="id-img">
        {postCreate.recclass === "H6" || postCreate.recclass === "H5" || postCreate.recclass === "H3-5" || postCreate.recclass === "H" || postCreate.recclass === "H4" ? 
        <div className="landing__imgH"></div> 
        : postCreate.recclass === "L6"  || postCreate.recclass === "L5" || postCreate.recclass === "LL5" || postCreate.recclass === "LL6" || postCreate.recclass === "LL4" || postCreate.recclass === "L4" 
          ? <div className="landing__imgL"></div>
          : postCreate.recclass === "Diogenite" || postCreate.recclass === "Diogenite-pm" 
          ? <div className="landing__imgD"></div>
            : postCreate.recclass === "Aubrite" || postCreate.recclass === "C" || postCreate.recclass === "Unknown" || postCreate.recclass === "Pallasite"  || postCreate.recclass === "Eucrite-mmict" || postCreate.recclass === "Ureilite-an" || postCreate.recclass === "Eucrite-pmict"
            ?<div className="landing__imgVar"></div>
            : <div className="landing__img"></div>}
        </div>
        <div className="landing__container-info">
          <div className='data-data'>
            <p className="landing__info-t">Name:</p>
            <p className="landing__info">{postCreate.name}</p>
          </div>
          <div className='data-data'>
            <p className="landing__info-t">Mass: </p>
            <p className="landing__info">{postCreate.mass}</p>
          </div>
          <div className='data-data'>
            <p className="landing__info-t">Id:</p>
            <p className="landing__info">{postCreate.id}</p>
          </div>
          <div className='data-data'>
            <p className="landing__info-t">Recclass:</p>
            <p className="landing__info">{postCreate.recclass}</p>
          </div>
          <div className='data-data'>
            <p className="landing__info-t">Year: </p>
            <p className="landing__info">{postCreate.year}</p>
          </div>
          <div className='data-data'>
            <p className="landing__info-t">Latitude: </p>
            <p className="landing__info">{postCreate.reclat}</p>
          </div>
          <div className='data-data'>
            <p className="landing__info-t">Longitude: </p>
            <p className="landing__info">{postCreate.reclong}</p>
          </div>
          </div>
    </div></>) : (<></>)}
    </>
  )
}
