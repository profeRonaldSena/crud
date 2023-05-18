'use client'
import { useTasks } from '@/context/TaskContext'
import TaskCard from '@/components/TaskCard'

function Home() {
 const { tasks } = useTasks()
 console.log(tasks)

 return (
  <>
   <h1>HOME</h1>
   <div>
    {tasks.map((task) => (
     <TaskCard task={task} key={task.id} />
    ))}
   </div>
  </>
 )
}

export default Home
