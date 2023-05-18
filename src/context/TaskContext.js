'use client'
import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTasks = () => {
 const context = useContext(TaskContext)
 if (!context) throw new Error('useTasks must used within a provider')
 return context
}

export const TaskProvider = ({ children }) => {
 const tasks = [
  {
   id: 1,
   title: 'mi primera tarea',
   description: 'mi primera tarea del dia',
  },
  {
   id: 2,
   title: 'mi segunda tarea',
   description: 'mi segunda tarea del dia',
  },
  {
   id: 3,
   title: 'mi tercera tarea',
   description: 'mi tercera tarea del dia',
  },
 ]

 return (
  <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
 )
}
