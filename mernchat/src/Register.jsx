import  { useState } from 'react'

const Register = () => {
    const{username,setUsername}=useState('');


  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto"> 
        <input  type="text" placeholder="username"  className="block mb-2 p-2 w-full rounded-sm" />
        <input type="passsword" placeholder="password" className="block mb-2 p-2 w-full rounded-sm"/>
        <button className="bg-blue-500 w-full text-white rounded-sm">Register</button>
      </form>
    </div>
  )
}

export default Register
