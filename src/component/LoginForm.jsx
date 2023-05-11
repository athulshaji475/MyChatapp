import React, { useState } from 'react'
import axios from 'axios'
function LoginForm() {
    const [username, setusername] = useState('')
    const [password,setpassword]=useState('')

      const  handleSubmit = async(e)=>{
          e.preventDefault()


               const  authObject={'project-Id':'5e643cba-006e-450b-a108-b81878d8b7d4','User-Name':username,'User-Secret':password}

         try {
         await axios.get('https://api.chatengine.io/chats',{headers:authObject})
         localStorage.setItem("username",username)
         localStorage.setItem("password",password)
         window.location.reload()
             } catch (error) {
    
            }
                 }

  return (
    <div className='wrapper'>
       <div className='form'>
         <h1 className='title'>Let's Chat</h1>
         <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}
                className='input'
                placeholder='username'
            />

           <input
                type='text'
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                className='input'
                placeholder='password'
            />

            <div align='center'>
               <button className='button'  type='submit' >
                    <span>
                        Start Chating
                    </span>
               </button>

            </div>
         </form>
       </div>
      
    </div>
  )
}

export default LoginForm
