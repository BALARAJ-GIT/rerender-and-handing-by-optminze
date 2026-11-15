import React, { useState } from 'react'
import Card from './components/Card'
import About from './components/About'
import Contract from './components/Contract'

const Wed = () => {
    const [ formDate, setFormDate ] = useState('');
    console.log(formDate);

    const handlechange = (e) => {
        setFormDate({
            ...formDate,[e.target.name]:e.target.value
        })
    }
    
     
    
  return (
    <div className='flex flex-col gap-5 w-60'>
        <input onChange={handlechange
        

        } className='border-2' type="text" placeholder='name' />

            <input onChange={handlechange}className='border-2'type="text" placeholder='email' />
        <input onChange={handlechange}
         className= 'border-2'type="text"placeholder='passward' />
        <button className='border-2'>submit</button>
        {/* <h1>this is name -{name}</h1>
        <h2>this is email -{email}</h2>
        <h3> this is passward -{passward} </h3> */}
    
    
      
    </div>
  )
}

export default Wed
