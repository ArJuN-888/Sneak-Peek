import React, { useState } from 'react'
import myContext from './Context'
import { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import '../Styles/auth.css'
export default function Login() {
  const {userdata,loginstats,setLoginstats,setloginuserProf,Ban} = useContext(myContext)
  console.log("loginstate",loginstats)
  const [emailinput,setemailinput] = useState("")
  const [passwordinput,setpasswordInput] = useState("")
  const [errorcount,setErrorcount] = useState({})
  const [showpassword,setshowpassword] = useState(false)

  const navigate = useNavigate()
  const handleClick = () => {
   const errors = validate(emailinput,passwordinput)
  setErrorcount(errors)
  if(Object.keys(errors).length === 0 )
  {
 
   const filterban =  Ban.filter((element)=>(element.email === emailinput && element.password === passwordinput))
   if(filterban.length!==0)
    {
      setemailinput("")
      setpasswordInput("")
      alert("You are banned (based on  our privacy policy and terms)")
    }
    else{
      setemailinput("")
      setpasswordInput("")
      navigate('/')
      setLoginstats(true)
      alert("Successfully logged in")
    }
   
  }
 
  }
  const validate = (email, pass) => {
    const error = {};
   
    if (!email) {
      error.email = "Email required...";
    }
   
 
    if (!pass) {
      error.password = "Password required...";
    }

     else {
      const matchingUsers = userdata.filter((element) => element.email === email);
      console.log("matchingUsers", matchingUsers);
  
      if (matchingUsers.length === 0) {
        error.email = "Email doesnt match...";
      } else {
        const correctUser = matchingUsers.find((user) => user.password === pass);
        setloginuserProf(correctUser)
        if (!correctUser) {
          error.password = " password doesnt match...";
        }
      }
    }
  
    return error;
  }
  

  
    
   
  
  return (
    <div className='form-container'>
      <div className='form-container-sub'>
      <div className='form-div'>
        
      <p className='form-title'>🅻🅾🅶-🅸🅽</p>
      <div className='inputonly-container'>
       <input value={emailinput} type='text' className='input' placeholder='Email...' onChange={(e)=>{setemailinput(e.target.value)}}/>
       <p className='caution' >{errorcount.email}</p>
       </div>
       <div className='inputonly-container'>
       <input value={passwordinput} className='input' type={showpassword ? "text" : "password"} placeholder='Password...' onChange={(e)=>{setpasswordInput(e.target.value)}}></input>
       <p className='caution'>{errorcount.password}</p>
       </div>
      <div className='show-container'> <input type='checkbox' className="check " onClick={()=>setshowpassword(!showpassword)} /><label className='show-label'>Show Password</label></div>
       {/* <Link to="/Cardadd">Card</Link> */}
       <button className='frm-btn' onClick={()=>{handleClick()}}>login</button>
       <div className='frm-link-holder'>Don't have an account ?<Link className='form-link' to="/Signup">Signup</Link></div>
    
       </div>
       </div>
    </div>
  )
}
