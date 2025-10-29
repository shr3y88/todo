import React from 'react'
import {MdDelete } from "react-icons/md"
import {MdSystemUpdateAlt } from "react-icons/md"

const TodoCards = ({ title, body,id, delid, updateid,tobeupdated }) => {
  const open=()=>{
    document.getElementById('update').style.display='flex'
    tobeupdated(updateid)
  }
  return (
    <div className="card p-3">
      <h3>{title}</h3>
      <p className='todo-card-p '>{body.split("",90)}</p>
      <div className="delete-update">
        <div onClick={open} className=" update text-white" ><MdSystemUpdateAlt /></div>
        <div className=" delete" onClick={()=>{delid(id)}} ><MdDelete /></div>
      </div>
    </div>
  )
}

export default TodoCards
