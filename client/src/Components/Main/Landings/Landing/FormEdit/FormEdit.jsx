import axios from 'axios';
import React, {useContext}  from 'react'
import { useForm } from "react-hook-form";
import { Post } from "../../../../../Context/Post"
const urlEdit = process.env.REACT_APP_URL_EDIT_L
export default function FormEdit(props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { setPutEdit, putEdit } = useContext(Post)
  const onSubmit = async d => {
    try{
    setPutEdit(d)
    const res = await axios.put(`${urlEdit}/${d.id}/${d.name}/${d.recclass}/${d.mass}/${d.year}/${d.reclat}/${d.reclong}`)
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
      <input {...register("name")} className="edit_input" defaultValue={props.data.name}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Mass: </label>
      <input {...register("mass")} className="edit_input" defaultValue={props.data.mass}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Id:</label>
      <input {...register("id")} className="edit_input" defaultValue={props.data.id}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Recclass:</label>
      <input {...register("recclass")} className="edit_input" defaultValue={props.data.recclass}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Year: </label>
      <input {...register("year")} className="edit_input" defaultValue={props.data.year}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Latitude: </label>
      <input {...register("reclat")} className="edit_input" defaultValue={props.data.reclat}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Longitude: </label>
      <input {...register("reclong")} className="edit_input" defaultValue={props.data.reclong}></input>
    </div>
    <button className='landing__button' onClick={props.state}> DISMISS CHANGES </button>
    <button className='landing__button' > SAVE CHANGES </button>
    </form>
  )
}
