import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodeItems'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id : Date.now() , ...todo} , ...prev])
  }

  const updateTode = (id , todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id  ?  todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTode) => (prevTode.id === id ? {...prevTode , completed : !prevTode.completed}: prevTode)))
  }

  // use localstorage for the store the item to get refresh the page


  // this is for the get the todos that are save into the localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length  > 0){
      setTodos(todos)
    }

  } , [])


  // set the items into the localstorage but  as string

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTode, deleteTodo, toggleComplete }}>
         <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg  text-white">
                    <h1 className="text-2xl font-bold text-center ">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
