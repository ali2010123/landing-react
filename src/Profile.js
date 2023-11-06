
import React from 'react'

export default function Profile(props) {
 
  
  return (
    <div className='profile'>

        <h1>{props.login}</h1>
        <p>{props.name}</p>
    </div>


  )
}
  
  
  

