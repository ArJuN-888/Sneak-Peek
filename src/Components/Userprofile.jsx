import React, { useState } from 'react'
import myContext from './Context'
import { useContext,useEffect } from 'react'
export default function Userprofile() {
  const {userdata,loginstats, setUserdata,loginUserprof,setloginuserProf} = useContext(myContext)
  const [signupdataeditobj,setSignupdataeditobj] = useState({username:"",email:"",password:""})
  const [profilevisible,setProfilevisible] = useState({})
  console.log("Signupdadaprof",signupdataeditobj)
  const [indexes,setIndexes] = useState(-1)
  const [passwordm,setpasswordm] = useState("")
  const [errorcount,seterrorcount] = useState({})
  const handleChange = (key,value)=>{
     setSignupdataeditobj({...signupdataeditobj,[key]:value})
  }
  useEffect(()=>{
    setProfilevisible(loginUserprof)
  },[loginUserprof])
 
  const Edit = () =>{
    if(loginstats===true)
    {
      setIndexes(1)
     
      setSignupdataeditobj(loginUserprof)
    }

    
  }
  const Update = () =>{
    const errors = validate(signupdataeditobj)
  seterrorcount(errors)
    const filterindex = userdata.findIndex((element)=>(element === loginUserprof))
    const updatedarray = [...userdata]
    updatedarray[filterindex ] = signupdataeditobj
    if(Object.keys(errors).length===0)
    {
      setloginuserProf(signupdataeditobj)
      setUserdata(updatedarray)
      setIndexes(-1)
      setSignupdataeditobj({username:"",email:"",password:""})
      setpasswordm("")
      alert("Successfully updated...")
    }
  
  }
  const Cancel = () =>{
    setIndexes(-1)
    seterrorcount({})
    setSignupdataeditobj({username:"",email:"",password:""})
    
  }
  const validate = (data)=>{
    const errordetected = {}
    var regular = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!data.username)
    {
      errordetected.user ="Username required"
    }
    if(!data.email)
    {
      errordetected.email ="Username required"
    }
    if(!data.password)
    {
      errordetected.password = "password required"
    }
    else if(!regular.test(data.password))
    {
        errordetected.password = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
    }
    if(!passwordm)
    {
      errordetected.passmatch = "confirmation required"
    }
    else if(data.password !== passwordm)
    {
      errordetected.passmatch = "password doesnt match"
    }
    return errordetected
  }
  return (
    <>
    
    <div className='userprofile-container'>
    <div className='profile-org'>
      

      <div className='view-profile'>
        <div className='prof-title'>🅿🆁🅾🅵🅸🅻🅴</div>
       <div className='username-prof'>Username : {profilevisible.username}</div>
       <div className='email-prof'> Email   :   {profilevisible.email}</div>  
       <div className='password-prof'>Password     : {profilevisible.password}</div>
      
      </div>

    
    </div>
     <div className='userdata-holder'>
      <p className='prof-header'>🆄🅿🅳🅰🆃🅴 🅿🆁🅾🅵🅸🅻🅴</p>
      <label className='prof-label'>Username</label>
      <input className='prof-input' type='text'  value={signupdataeditobj.username} onChange={(e)=>{handleChange("username",e.target.value)}}/>
      <p className='caution'>{errorcount.user}</p>
      <label className='prof-label'>Email</label>
      <input className='prof-input' type='text' value={signupdataeditobj.email} onChange={(e)=>{handleChange("email",e.target.value)}} />
      <p className='caution'>{errorcount.email}</p>
      <label className='prof-label'>Password</label>
      <input className='prof-input' type='text' value={signupdataeditobj.password}  onChange={(e)=>{handleChange("password",e.target.value)}}/>
      <p className='caution'>{errorcount.password}</p>
      <label className='prof-label'>Password Confirmation</label>
      <input className='prof-input' type='text' value={passwordm}  onChange={(e)=>{setpasswordm(e.target.value)}}/>
      <p className='caution'>{errorcount.passmatch}</p>
      {indexes === -1 ? <button className='prof-bt' onClick={()=>{Edit()}}>Edit</button>:<><button className='prof-bt'  onClick={()=>{Update()}}>Update</button>
      <button className='prof-bt' onClick={()=>{Cancel()}}>Cancel</button></>}
    </div>
  
    </div>
   
    </>
  )
}
