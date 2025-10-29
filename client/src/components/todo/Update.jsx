import React, { useEffect, useState } from 'react'
import { FaWindowClose } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'

const Update = ({update}) => {
  useEffect(() => {
   
  setInputs({
    title: update.title || "",
    body:  update.body || "",
    
  })
   
  }, [update])
  

  const [Inputs, setInputs] = useState({
    title:"" ,
    body: "" ,
  })
 
  const change=(e)=>{
    const {name,value}=e.target;
    setInputs({...Inputs,[name]:value})
  }
     const ok= async ()=>{
      await axios.put(`http://localhost:1000/api/v2/update/${update._id}`,Inputs).then((response)=>{
        toast.success("Your task is updated")
      })
    
    document.getElementById('update').style.display='none'
    
  }
    const remove=()=>{
        document.getElementById('update').style.display='none'
    }
  return (
    <div className='update-container'>
        <div onClick={remove} className='cross'><FaWindowClose /></div>
        <h3><b>Update Your Task</b></h3>
        <input type='text' name="title" placeholder='TITLE' className='todo-inputs' value={Inputs.title} onChange={change}/>
        <textarea placeholder='BODY' name="body" className='todo-inputs' value={Inputs.body} onChange={change}/>
        <button onClick={ok} className='btn-signup'>UPDATE</button>
    </div>
  )
}

export default Update