import React from 'react'
import { useState } from 'react';
import "./FormStyle.css"

export default function SignUp() {
  const [to ,setTo]=useState({name:"",pass:"",phone:"",email:""});
    function handleChange(e){
      setTo({
        ...to,
        [e.target.id]: e.target.value
      })
    }

    function handleSubmit(e){
      e.preventDefault();
      alert("Welcome " + to.name);
      
      console.log(to);
      setTo({name:"",pass:"",phone:"",email:""});
    }
  return(
    <div className='backcolor'>
      <div className='from'>
        <form onSubmit={handleSubmit}>
            <h1>SignUp Form</h1>
            <label htmlFor="name" className='size'>Username : </label>
            <input type="text" id="name"value={to.name}onChange={handleChange} />
            <br /><br />
            <label htmlFor="pass" className='size'>Password : </label>
            <input type="Password" value={to.pass}id="pass"onChange={handleChange} />
            <br /><br />
            <label htmlFor="phone" className='size'>Phone No. : </label>
            <input type="number" value={to.phone} id="phone" onChange={handleChange}/>
            <br /><br />
            <label htmlFor="email" className='size'>Username : </label>
            <input type="email" value={to.email} id="email"onChange={handleChange} required/>
            <br /><br />
            <button type='submit' className='btn'>Login</button>
        </form>
      </div>
    </div>
  )
}
