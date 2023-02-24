import React from 'react'
import './Card.css'
import img1 from '../assets/bg-react.svg'
import {languages} from '../helper/data'
import CardTitle from './CardTitle'
const Cards = () => {
  return (
    <div className='container'>
        <img src={img1} alt="" width='160px' />
        <div className='main'>
            <h1 className=''>Languages</h1>
            <div className='strip'></div>
            <div className="lang row">
                {languages.map((item)=>(
                    <CardTitle {...item}/>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Cards
