import React from 'react'
import "./Signup.css"
import HeadingComponent from './HeadingComponent'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
const history =useNavigate();

  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: ""
  })
  const change = (e) => {
    const { name, value } = e.target
    setInputs({ ...Inputs, [name]: value })
  }
  const submit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:1000/api/v1/register", Inputs).then((response) => {
     if(response.data.message === "User Already Exists"){
    alert(response.data.message)
     }else{
      alert(response.data.message)
       setInputs({
        email: "",
        username: "",
        password: ""
      })
      history('/signin')
     }
    

    })



  }
  return (
    <div className='signup'>
      <div className='container'>
        <div className='row'>
          <div className='small col-lg-7 '>
            <div className='enter d-flex flex-column '>
              <input
                className='b'
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={change}
                value={Inputs.email}
              />
              <input
                className='b'
                type='username'
                name='username'
                placeholder='Enter your username'
                onChange={change}
                value={Inputs.username}
              />
              <input
                className='b'
                type='password'
                name='password'
                placeholder='Enter your password'
                onChange={change}
                value={Inputs.password}
              />
              <button onClick={submit} className='btn-signup '>Sign Up</button>
            </div>
          </div>
          <HeadingComponent first="Sign" second="Up" />

        </div>

      </div>

    </div>
  )
}

export default SignUp