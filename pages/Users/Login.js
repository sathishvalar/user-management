import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Globalstate';
import { Link } from 'react-router-dom'
import User from '../../Navbar/user/user'


const Login = () => 
  {
    const {users,setUsers}=useContext(GlobalContext);
    console.log(users);
    const deleteUser=(id)=>
    {
      setUsers((currentUsers)=>
        {
          return currentUsers.filter((User)=>User.id!==id);
        }
      );
    }
  return (
    <div>
      <h1 className='usertitle'>users</h1>
      {
        users.length===0 ? (
        <div>
          <h1>No Users found. Add details</h1>
          <h3><Link to="/">Home </Link></h3>
        </div>) :
        (users.map((user)=>(
    <User key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          email={user.email}
          contact={user.contact}
          consultant={user.consultant}
          deleteUser={() => deleteUser(user.id)}/>

        )))}
        
        </div>

      )}

  
  
      




export default Login