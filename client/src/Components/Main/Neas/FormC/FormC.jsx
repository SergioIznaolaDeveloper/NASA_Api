import axios from 'axios';
import React, {useContext } from 'react'
import { useForm } from "react-hook-form";
import { NeasContext } from "../../../../Context/NeasContext"
import { Post } from "../../../../Context/Post"
const urlCreate = process.env.REACT_APP_URL_CREATE_N
export default function FormC() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { setPostCreate, postCreate } = useContext(Post)
  const { setCreate } = useContext(NeasContext)

  const onSubmit = async d => {
  try{
  setPostCreate(d)
  console.log(`${urlCreate}/${d.designation}/${d.orbit_class}/${d.h_mag}/${d.period_yr}/${d.discovery_date}/${d.q_au_1}/${d.q_au_2}`)
  const res = await axios.post(`${urlCreate}/${d.designation}/${d.orbit_class}/${d.h_mag}/${d.period_yr}/${d.discovery_date}/${d.q_au_1}/${d.q_au_2}`)
  const data = await res.data;
  console.log(data)
  reset()
  // setTimeout(() => {setPostCreate(""), setCreate(false)}, 5000) // oculta formulario y landing añadida
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
    <label className="fLandings__label" htmlFor="designation">Designation:</label>
    <input {...register("designation", { required: true, minLength: 3})} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="discovery_date">discovery_date:</label>
    <input type="number"{...register("discovery_date", { required: true ,mingLength:4 , maxLength:4},)} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="orbit_class">Orbit Class:</label>
    <select placeholder="Fire"{...register("orbit_class")} className="fLandings__input">
        <option value="Jupiter">Jupiter-family Comet</option>
        <option value="Apollo">Apollo</option>
        <option value="Amor">Amor</option>
        <option value="Aten">Aten</option>
    </select>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="h_mag">h_mag:</label>
    <input type="h_mag"{...register("h_mag", { required: true, minLength:2, maxLength: 8})} className="fLandings__input"/>
    </div>
    

    </div>
    <div className='fLandings__form-section'>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="period_yr">Period_yr:</label>
    <input type="number" {...register("period_yr", { required: true })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="q_au_1">q_au_1:</label>
    <input type="number" {...register("q_au_1", { required: true, minLength: 1, maxLength: 3 })} className="fLandings__input"/>
    </div>
    <div className="fLandings__form-two">
    <label className="fLandings__label" htmlFor="q_au_2">q_au_2:</label>
    <input type="number" {...register("q_au_2", { required: true, minLength: 1, maxLength: 3 })} className="fLandings__input"/>
    </div>
    <button className="formPost__button">ADD LANDING</button>
    </div>
    <section className="form__errors">
    {errors.name?.type?<p>Name is required, min length: 3</p>: null}
    {errors.mass?.type?<p>Mass is required, length: 3-8</p>: null}
    {errors.h_mag?.type?<p>Id is required, length: 4-8</p>: null}
    {errors.period_yr?.type?<p>Year is required, length: 4</p>: null}
    {errors.q_au_1?.type?<p>Latitude is required, length: 1-3</p>: null}
    {errors.q_au_2?.type?<p>Longitude is required, length: 1-3</p>: null}
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
