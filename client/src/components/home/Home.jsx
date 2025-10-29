import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center '>
        <div className="containerd-flex justify-content-center align-items-center flex-column">
            <h1 className='heading text-center'>Organize your<br/>work and life, finally.</h1>
            <div className='text-center'>
            <p className='para'>
                Become focused , organized amd calm with<br/>
                todo app . The world's #1 task manager app.
            </p>
            <Link to="/todo"><button className='button'>Make Todo List</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home