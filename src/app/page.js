'use client'
import { useTasks } from '@/context/TaskContext'

function Home() {
 const { tasks } = useTasks()
 console.log(tasks)

 return (
  <>
   <h1>HOME</h1>
   <div>
    {tasks.map((task) => (
     <div key={task.id}>
      <h1>
       {task.id} {task.title}
      </h1>
      <p>{task.description}</p>
     </div>
    ))}
   </div>
  </>
 )
}

export default Home
