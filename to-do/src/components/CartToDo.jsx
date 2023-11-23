import { useCallback } from "react"

function CartToDo({todo,reloadList}) {
  const callbackDeleteToDo = useCallback(async (id) => {
    try {
      const res = await fetch('/api',{method:"DELETE",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({id})})
      if(res.status == 200)
        reloadList()
    } catch (error) {
      console.error(error)
    }
  })
    return (
      <>
        <div className="task">
            <span id="taskname">
                {todo.nombre}
            </span>
            <button className="delete" onClick={()=>{
              callbackDeleteToDo(todo.id)
            }}>
                <i className="far fa-trash-alt"></i>
            </button>
        </div>
      </>
    )
  }
  
  export default CartToDo