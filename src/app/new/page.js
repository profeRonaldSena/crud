'use client'
import { useState } from 'react'

const New = () => {
 const [task, setTask] = useState()
 // funcion que captura los cambios en el formulario
 const handleChange = (e) => {
  setTask({
   ...task,
   [e.target.name]: [e.target.value],
  })
 }
 //  funcion que captura cuando le doy al boton enviar
 const handleSubmit = (e) => {
  e.preventDefault()
  console.log(task)
 }

 return (
  <form onSubmit={handleSubmit}>
   <input
    name='title'
    placeholder='escribe el titulo'
    onChange={handleChange}
   />
   <textarea
    name='description'
    placeholder='escribe lo que tienes que hacer en la tarea'
    onChange={handleChange}
   />
   <button>Save</button>
  </form>
 )
}

export default New
