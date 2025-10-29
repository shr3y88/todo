import React from 'react'
import "./Signup.css"
import HeadingComponent from './HeadingComponent'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'

const SignIn = () => {
  const dispatch = useDispatch()
  const history =useNavigate();


  const [Inputs, setInputs] = useState({
    email: "",
  
    password: ""
  })
  const change = (e) => {
    const { name, value } = e.target
    setInputs({ ...Inputs, [name]: value })
  }
  const submit = async (e) => {
    e.preventDefault()
    await axios
    .post("http://localhost:1000/api/v1/login", Inputs)
    .then((response) => {
     sessionStorage.setItem("id",response.data.others._id)
     dispatch(authActions.login())
     history('/todo')
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
              value={Inputs.email}
              onChange={change}
              />
            
              <input
              className='b'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={Inputs.password}
              onChange={change}
              />
              <button className='btn-signup' onClick={submit}>Sign In</button>
            </div>
            </div>
            <HeadingComponent first="Sign" second="In" />

        </div>

      </div>

    </div>
  )
}

export default SignIn