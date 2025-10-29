import React from 'react'
import "./Todo.css"
import { useState, useEffect } from 'react'
import TodoCards from './TodoCards'
import { ToastContainer, toast } from 'react-toastify'
import Update from './Update'
import axios from 'axios'

let toupdatearray=[]


const Todo = () => {

  let id = sessionStorage.getItem("id")
  const [Insert, setInsert] = useState({ title: "", body: "" })
  const [Array, setArray] = useState([])


  const show = () => {
    document.getElementById('textarea').style.display = 'block'

  }
  const change = (e) => {
    const { name, value } = e.target
    setInsert({ ...Insert, [name]: value })
  }
  const submit = async () => {

    if (Insert.title === "" || Insert.body === "") {
      toast.error("Title or Body should not be empty")
    } else {
      if (id) {
        await axios
          .post("http://localhost:1000/api/v2/addtask", {
            title: Insert.title,
            body: Insert.body,
            id: id
          })
          .then((response) => {
            console.log(response)
          })

        setInsert({ title: "", body: "" })
        toast.success("Your task is added")
      } else {
        setArray([...Array, Insert])
        setInsert({ title: "", body: "" })
        toast.success("Your task is added")
        toast.error("Please sign up")
      }

    }


  }
  const del = async (cardid) => {

    if (id) {
      await axios.delete(`http://localhost:1000/api/v2/delete/${cardid}`, { data: { id: id } })
      toast.success("Your task is deleted")
    } else {
      toast.error("please sign up")
    }
    if (Array.length === 0) {
      document.getElementById('card').style.display = 'none'
    }


  }
  const update=(value)=>{
    toupdatearray=Array[value]
  }
  useEffect(() => {

    if (id) {
      const fetch = async () => {
        await axios.get(`http://localhost:1000/api/v2/gettask/${id}`).then((response) => {
          setArray(response.data.list)
        })
      }
      fetch()
    } else {
      toast.error("please sign up")
    }

  }, [submit])
  return (
    <div className='todo flex-column gap-5 '>
      <ToastContainer />
      <div className="todo-main container d-flex justify-content-center align-items-center">
        <div className='d-flex flex-column todo-inputs-div  '>
          <input
            id='title'
            type='text'
            className='todo-inputs'
            placeholder='TITLE'
            name="title"
            value={Insert.title}
            onChange={change}
            onClick={show}

          />
          <textarea
            id='textarea'
            type="text"
            placeholder='BODY'
            className='todo-inputs'
            name="body"
            value={Insert.body}
            onChange={change}
          />
          <button className='btn-signup' onClick={submit}>Add</button>

        </div>

      </div>
      <div className="card-container" id='card' >
        {Array && Array.map((item, index) =>
          <div className=" mx-5 my-2" key={index}>
            <TodoCards title={item.title}
              body={item.body}
              id={item._id} delid={del}
              updateid={index}
              tobeupdated={update}
            />
          </div>

        )}


      </div>
      <div id='update' className="overlay ">
        <div className="todo-update">
          <Update update={toupdatearray} />
        </div>
      </div>

    </div>
  )
}

export default Todo