import { useState } from 'react'
import AddTaskForm from './components/AddtaskForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AddTaskForm />
    </>
  )
}

export default App
