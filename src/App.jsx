import { useState } from 'react'
import './App.css'
import Footer from './MyComponents/Footer'
import Header from './MyComponents/header'
import Todos from './MyComponents/Todos'


function App() {
  const onDelete = (todo) => {
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)
    // console.log(todos)
    setTodos(todos.filter(e => {
      console.log(e)
      return e !== todo;
    }))
  }


  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market.',
      desc: 'You need to go to the market to get this job done.'
    },
    {
      sno: 2,
      title: 'Go to the mall.',
      desc: 'You need to go to the mall to get this job done.'
    },
    {
      sno: 3,
      title: 'Go to the ghat.',
      desc: 'You need to go to the ghat to get this job done.'
    },
  ])
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  )
}

export default App
