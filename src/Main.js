import React, { useRef } from 'react'
import Posts from './Pocts'
import './App.css'

export default function Main(props) {

  return (
    <div className='block'>
      
        <Posts posts={props.data.posts}/>
    </div>
  )
}
