import axios from 'axios';
import React, {useContext}  from 'react'
import { useForm } from "react-hook-form";
import { Post } from "../../../../../Context/Post"
const urlEdit = process.env.REACT_APP_URL_EDIT_N
export default function FormEdit(props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { setPutEdit, putEdit } = useContext(Post)
  const onSubmit = async d => {
    try{
    setPutEdit(d)
    const res = await axios.put(`${urlEdit}/${d.designation}/${d.orbit_class}/${d.h_mag}/${d.period_yr}/${d.discovery_date}/${d.q_au_1}/${d.q_au_2}`)
    const data = await res.data;
    console.log(data)
    reset()
    props.state() // oculta formulario y landing añadida
    }catch(err){
    console.log(err)
    }
    };
  return (
    <form className="landing__container-info" onSubmit={handleSubmit(onSubmit)}>
    <div className='data-data-e'>
      <label className="landing__info-t">Name:</label>
      <input {...register("designation")} className="edit_input" defaultValue={props.data.designation}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Orbit: </label>
      <input {...register("orbit_class")} className="edit_input" defaultValue={props.data.orbit_class}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Filter H:</label>
      <input {...register("h_mag")} className="edit_input" defaultValue={props.data.h_mag}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Year:</label>
      <input {...register("period_yr")} className="edit_input" defaultValue={props.data.period_yr}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Discovery: </label>
      <input {...register("discovery_date")} className="edit_input" defaultValue={props.data.discovery_date}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Latitude: </label>
      <input {...register("q_au_1")} className="edit_input" defaultValue={props.data.q_au_1}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Longitude: </label>
      <input {...register("q_au_2")} className="edit_input" defaultValue={props.data.q_au_2}></input>
    </div>
    <button className='landing__button' onClick={props.state}> DISMISS CHANGES </button>
    <button className='landing__button' > SAVE CHANGES </button>
    </form>
  )
}
