import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';



function App() {
 
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);


  useEffect(()=>{
    let todostring=localStorage.getItem("todos")
    if(todostring){
    let todos=JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
    }
  },[])



  const saveTols=(params=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  })



  const handleChange=(e)=>{
    setTodo(e.target.value);
  }


  const handleCheckbox=(e)=>{
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)
    saveTols();
  }


  const handleEdit=(e,id)=>{
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo);
    let newTodos=todos.filter(item=>{
      return item.id!=id;
    });
    setTodos(newTodos)
    saveTols();
  }


  const handleDelete=(e,id)=>{
    let newTodos=todos.filter(item=>{
      return item.id!=id;
    });
    setTodos(newTodos)
    saveTols();
  }


  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}]);
    setTodo("");
    console.log(todos);
    saveTols();
  }

  
  return (
    <>
      <Navbar></Navbar>
      <div className='w-[70vw] mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
       
          <h1 className='text-xl font-bold'>Your Todos</h1>
          <div className="addtodo">
            <h2 className='text-lg font-bold my-5 '>Add a Todo</h2>
            <input onChange={handleChange} value={todo} type='text' className='w-1/2'></input>
            <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
          </div>


          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className='todos'>
            {todos.length===0 && <div className='m-5'>No Todos to display</div>}
            {todos.map(item=>{
             return <div key={item.id} className='todo flex w-1/4 my-3 justify-between'>
              <input name={item.id} onClick={handleCheckbox} type="checkbox" value={item.isCompleted} className="checkbox" />
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>
            </div>
             })}
          </div>
          

      </div>
    </>
  )
}

export default App







/*
In JavaScript, especially when working with React, event handlers often receive an event object as the first argument. 
This event object contains information about the event that triggered the handler, such as mouse clicks, keyboard presses, and other user interactions.

Passing the event object to an event handler like handleDelete is useful because it allows you to:
Access event properties: Sometimes you might need to get details from the event, like the target element or the mouse coordinates.
Prevent default behaviors: If you need to prevent a default action from occurring (like preventing a form from submitting), you can use methods like event.preventDefault() or event.stopPropagation().
However, in your handleDelete function, it doesn't seem like you're using the event object, and you might not need it for your current implementation. 
The main purpose of the handleDelete function appears to be removing a specific item from a list by its id. In this case, the event object isn't essential


const saveTols=(params=>{
localStorage.setItem("todos",JSON.stringify(todos))
})
*/