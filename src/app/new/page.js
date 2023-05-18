import { useState } from 'react'

const New = () => {
 const [task, setTask] = useState()

 const handleChange = (e) => {
  setTask({
   ...task,
   [e.target.name]: [e.target.value],
  })
 }

 return (
  <form>
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
  </form>
 )
}

export default New
