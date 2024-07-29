import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import { v4 as uuid } from 'uuid';
import { GlobalContext } from '../../context/Globalstate';

const Home = () => {
  const {setUsers}=useContext(GlobalContext);
  const[userinfo,setUserinfo] = useState
  ({
      id:"",
      name:"",
      age:"",
      email:"",
      contact:"",
      consultant:""
    })

  useEffect( ()=>
  {
    setUserinfo((currentInfo)=>
    {
      return{
        ...currentInfo,
        id:uuid(),
      }
    }

    )
  }
  ,[]);
  const handlechange= (event)=>
  {
    const{name,value}=event.target;
    setUserinfo(
      (currentInfo)=>
      {
        return{...currentInfo,[name]:value,};
        
      }
    )
  }
  const adduser = ()=>
    {
      console.log(userinfo);
      alert('Registered successfully');
      setUsers((currentUsers)=>
      {
        return{...currentUsers,userinfo }
      })
      setUserinfo({
      id:uuid(),
      name:"",
      age:"",
      email:"",
      contact:"",
      consultant:""
      })
      
  
  }
  
  return (
    <div className='home'>
        <div className='homecontainer'>
          <div className='form'>
            <h1 className='title'>Registeration form</h1>
            <form>
            <input type='text' placeholder='id'  value={userinfo.id}
            onChange={handlechange}></input><br></br>
            <input type='text' name='name' placeholder='Enter your name' required  value={userinfo.name}
            onChange={handlechange}></input> <br></br>
            <input type='number' name='age' placeholder='Enter your age'required  value={userinfo.age }
            onChange={handlechange}></input> <br></br>
            <input type='email' name='email' placeholder='Enter your email address'required  value={userinfo.email}
            onChange={handlechange}></input> <br></br>
            <input type='text' name='contact' placeholder='Enter your number'required  value={userinfo.contact}
            onChange={handlechange}></input> <br></br>
            <input type='text' name='consultant' placeholder='Enter your consultant' required  value={userinfo.consultant}
            onChange={handlechange}></input> <br></br>
            </form>

            <button onClick={adduser}>Register</button>


          </div>
        </div>
        </div>
  )
}

export default Home