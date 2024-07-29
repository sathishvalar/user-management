import React from 'react'
import './user.css';


const user = ({id,name,age,email,contact,consultant,deleteUser}) => 
  {
  return (
    <div className='user'>
      <h2>id:<span>{id}</span></h2>
      <h2>name:<span>{name}</span></h2>
      <h2>age:<span>{age}</span></h2>
      <h2>email:<span>{email}</span></h2>
      <h2>contact:<span>{contact}</span></h2>
      <h2>consultant:<span>{consultant}</span></h2>
      <h2>deleteUser:<span>{deleteUser}</span></h2>
      <div className='bottom'>
        <button className='delete'onClick={deleteUser}>delete</button>

      </div>
    </div>
  )
}

export default user