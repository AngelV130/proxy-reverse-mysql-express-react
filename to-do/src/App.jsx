import { useCallback, useEffect, useRef, useState } from "react"
import CartToDo from "./components/CartToDo"

function App() {
  const url = "http://localhost:3000"
  const [todos,setTodo] = useState([])
  const inputRef = useRef("")

  const callbackGetToDo = useCallback(async () => {
    try {
      const res = await fetch('/api',{method:"GET"})
      const data = await res.json()
      setTodo(data.data)
    } catch (error) {
      console.error(error)
    }
  })

  const callbackPostToDo = useCallback(async (name) => {
    try {
      const res = await fetch('/api',{method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({name})})
      const data = await res.json()
      setTodo([...todos,data.data])
      inputRef.current.value = ''
    } catch (error) {
      console.error(error)
    }
  })
  useEffect(()=>{
    callbackGetToDo()
  },[])
  return (
    <>
      <div className="container">
        <div id="newtask">
          <h3>TODO LIST</h3>
            <input type="text" placeholder="Task to be done.." ref={inputRef}/>
            <button id="push" onClick={()=>{
              const name = inputRef.current.value.trim()
              if(name != null && name != "")
                callbackPostToDo(name)
            }}>Add</button>
        </div>

          <div id="tasks">
            {
              todos.map((todo) => <CartToDo key={todo.id} todo={todo} reloadList={callbackGetToDo}/>)
            }
            </div>
      </div>
    </>
  )
}

export default App
