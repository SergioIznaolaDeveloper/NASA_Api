import React from 'react'
import { useForm } from "react-hook-form";
const urlDelete = process.env.REACT_APP_URL_DELETE

export default function FormEdit(props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async d => {
    try{
    setPostCreate(d)
    const res = await axios.put(`${urlCreate}/${d.name}/${d.id}/${d.recclass}/${d.mass}/${d.year}/${d.reclat}/${d.reclong}`)
    const data = await res.data;
    console.log(data)
    reset()
    setTimeout(() => {setPostCreate(""), setCreate(false)}, 5000) // oculta formulario y landing añadida
    }catch(err){
    console.log(err)
    }
    };
  return (
    <form className="landing__container-info" onSubmit={handleSubmit(onSubmit)}>
    <div className='data-data-e'>
      <label className="landing__info-t">Name:</label>
      <input className="edit_input" defaultValue={props.data.name}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Mass: </label>
      <input className="edit_input" defaultValue={props.data.mass}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Id:</label>
      <input className="edit_input" defaultValue={props.data.id}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Recclass:</label>
      <input className="edit_input" defaultValue={props.data.recclass}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Year: </label>
      <input className="edit_input" defaultValue={props.data.year}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Latitude: </label>
      <input className="edit_input" defaultValue={props.data.reclat}></input>
    </div>
    <div className='data-data-e'>
      <label className="landing__info-t">Longitude: </label>
      <input className="edit_input" defaultValue={props.data.reclong}></input>
    </div>
    <form action={`/api/astronomy/landings/delete/${props.data.id}`}method='POST'>
      <button className='landing__button'>SAVE CHANGES</button>
      </form>
    </form>
  )
}
