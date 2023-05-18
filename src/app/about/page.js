'use client'
import { useTasks } from '@/context/TaskContext'

const About = () => {
 const { tasks } = useTasks()
 console.log(tasks)

 return <h1>About</h1>
}

export default About
