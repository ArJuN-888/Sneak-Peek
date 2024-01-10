import React, { useState } from 'react'
import myContext from './Context'
import '../Styles/auth.css'
import { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Signup() {
    const { userdata,setUserdata,setLoginstats,signupdata,setSignupdata, loginUserprof,setloginuserProf} = useContext(myContext)

    const [passmatch,setpassMatch] = useState("")
    const [errorcount,seterrorcount] = useState({})
    const [showpassword,setshowpassword] = useState(false)
    const [showpasswordmatch,setshowpasswordmatch] = useState(false)
    const navigate = useNavigate()
    console.log("loginaccesseddata", loginUserprof)
    console.log("errorcount",errorcount)
    console.log("signupdata",userdata)
    const handleChange = (field,value) =>{
       setSignupdata({...signupdata,[field]:value})
    }
    const handleClick = () =>{
        const errors = validate(signupdata)
        seterrorcount(errors)
        if(Object.keys(errors).length === 0)
        {
            setloginuserProf(signupdata)
            setUserdata([...userdata,signupdata])
            setLoginstats(true)
            navigate("/")
            setSignupdata({username:"",email:"",password:""})
            setpassMatch("")
            alert("Successfully logged-in...")
        }
    }
    const validate = (data) =>{
        const errorsdetected = {}
        var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        var regular = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!data.username)
        {
            errorsdetected.username = "username required..."
        }
        if(!data.email)
        {
            errorsdetected.email = "email required..."
        }
        else if(!emailregex.test(data.email))
        {
            errorsdetected.email = "Enter a valid email address....."
        }
        if(!data.password)
        {
            errorsdetected.password = "password required..."
        }
        else if(!regular.test(data.password))
        {
            errorsdetected.password = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
        }
        if(!passmatch)
        {
            errorsdetected.passwordmatch = "password confirmation required..."
        }
        if(passmatch !== data.password)
        {
            errorsdetected.passwordmatch = "password doesnt match... "
        }
        return errorsdetected
    }
  return (
    <div className='form-container'>
        <div className='form-container-sub'>
      <div className='form-div'>
         <p className='form-title'>🆂🅸🅶🅽-🆄🅿</p>
         <div className='inputonly-container'>
<input value={signupdata.username} className='input' type='text' placeholder='Username...' onChange={(e)=>{handleChange("username",e.target.value)}}/>
<p className='caution'>{errorcount.username}</p>
</div>
<div className='inputonly-container'>
<input value={signupdata.email} className='input' type='text'  placeholder='Email...' onChange={(e)=>{handleChange("email",e.target.value)}}/>
<p className='caution'>{errorcount.email}</p>
</div>
<div className='inputonly-container'>
<input value={signupdata.password} className='input' type={showpassword ? "text" :"password"} placeholder='Password...' onChange={(e)=>{handleChange("password",e.target.value)}}/>
<p className='caution'>{errorcount.password}</p>
</div>

<div className='show-container'> <input type='checkbox' className="check " onClick={()=>setshowpassword(!showpassword)} /><label className='show-label'>Show Password</label></div>

<div className='inputonly-container'>
<input value={passmatch} className='input' type={showpasswordmatch ? "text" :"password"} placeholder='Re-enter password...' onChange={(e)=>setpassMatch(e.target.value)}/>
<p className='caution'>{errorcount.passwordmatch}</p>
</div>
<div className='show-container'> <input type='checkbox' className="check " onClick={()=>setshowpasswordmatch(!showpasswordmatch)} /><label className='show-label'>Show Password</label></div>
<button className='frm-btn' onClick={()=>{handleClick()}}>Sign-up</button>
<div className='frm-link-holder'>already have an account ?<Link className='form-link' to="/Login">Login</Link></div>

</div>
       </div>
    </div>
  )
}
