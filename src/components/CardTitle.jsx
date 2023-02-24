import React, {useState} from 'react'


const CardTitle = ({name,img,options}) => {
  const [toggle, setToggle] = useState(true)
  const hendalMouseEnter=(e)=>{
    e.target.querySelector('img').style.transform='scale(0.9)'
    console.log(e.target.querySelector('img'))
    
  }
  const hendalMouseLeave=(e)=>{
    e.target.querySelector('img').style.transform='scale(1)'
  }
  return (
    
    <div className='card col-6 me-3' role='button' onClick={()=>setToggle(!toggle)} onMouseEnter={hendalMouseEnter} onMouseLeave={hendalMouseLeave}>
      {toggle ?<div>
        <img  className='pt-2' src={img} alt="" width='120px' height='100px'/>
        <h6>{name}</h6>
      </div> :  <div className='cardback'>
        {options.map((item,e)=>(
          <ul key={e}>
            <li>{item}</li>
          </ul>
        ))}

      </div>}
      


      
    </div>
  )
}

export default CardTitle
