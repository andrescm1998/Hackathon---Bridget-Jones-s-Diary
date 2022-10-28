import React, { useEffect } from 'react'

export default function LogOut() {


    async function logOut(){
        const response = await fetch("http://localhost:3000/users/logout", {credentials: 'include'})
        console.log(response.status)
    }

    useEffect(() => {
        logOut()
    }, [])


  return (
    <div>YOU HAVE BEEN LOGGED-OUT</div>
  )
}
