import React, { useState } from 'react'
type Auth ={
    name:string;
    email:string;
}
const AuthComponent = () => {
    const [user, setUser]=useState<Auth |null >(null);
    const handleLogin=()=>{
      setUser({
        name:"Leo",
        email:"simple@gmail.com"
      })
    }
    const handleLogout=()=>{
      setUser(null)  
    }
  return (
    
    <div>
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleLogout}>LogOut</button>
         <p>Welcome to your profile:{user?.name} {user?.email} </p>
    </div>
  )
}

export default AuthComponent