import React from 'react'
import "./Signup.css"

const HeadingComponent = ({first,second}) => {
  return (
    
        <div className='big col-lg-4 d-flex justify-content-center align-items-center'>
            {first}<br/>{second}
            </div>
  
  )
}

export default HeadingComponent