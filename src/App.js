import React from 'react'
import Todo from './components/Todo'


const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Title" />
      <Todo text="Example" />
    </div>
  )
}

export default App
