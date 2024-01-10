import React from 'react'
import myContext from './Context'
import { useContext,useState } from 'react'
export default function Usermanagement() {
    const {userdata,setUserdata,Ban,setBan} = useContext(myContext)
   
    const userDelete = (duser) =>{
        const deleteUser = userdata.filter((element)=>{return(element !== duser)})
        setUserdata(deleteUser)
        alert("Successfully deleted...")
      }
      const userBan = (duser)=>{
     
        if(Ban.includes(duser))
        {
          setBan(Ban.filter((element)=>(element !== duser)))
          alert("Un-banned successfully...")
          
        }
        else{
          setBan([...Ban,duser])
         
          alert("banned successfully...")
        }
   
      }
  return (
    <div className='table-responsive table-container'>
    <p className='table-title ps-2'>🆁🅴🅶🅸🆂🆃🅴🆁🅴🅳-🆄🆂🅴🆁-🅳🅰🆃🅰</p>
    <table className='table table-striped '>
    <thead className='table-primary'>
    <tr>
     
     <th>Username</th>
     <th>Email</th>
     <th>Password</th>
     <th>Action</th>
    </tr>
    </thead>
    <tbody>
   
     {userdata.map((item,index)=>(
  
          
  <tr >
  <td>{item.username}</td> 
  <td>{item.email}</td>
  <td>{item.password}</td>        
<td> <button className='table-btn1' onClick={()=>{userDelete(item)}}>Delete</button> 
 <button className='table-btn2' onClick={()=>{userBan(item)}}>{Ban.includes(item) ? "Un-ban":"ban"}</button></td>

 </tr>


     ))}
       
     </tbody>
       </table>
      
    </div>
  )
}
