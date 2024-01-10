import React from 'react'
import Image from 'react-bootstrap/Image';
import like from '../Pictures/likes.png'
import unlike from '../Pictures/unlike.png'
import myContext from './Context';
import {Link, useNavigate} from 'react-router-dom'
import '../Styles/Search.css'
import { useContext } from 'react';
export default function Search() {
    const {searchresult,Wishlist,setWishlist,loginstats} = useContext(myContext)
    const navigate = useNavigate()
    const HandleClick = (data) =>{
        if(Wishlist.includes(data))
        {
          setWishlist(Wishlist.filter((element)=>{return(element !== data)}))
        }
        else if(loginstats=== true){
          setWishlist([...Wishlist,data])
        }
        else{
          navigate("/Login")
        }
      } 
  return (
    <div className="search-container">
    <div className='card-container'>
    {searchresult.map((item,index)=>(
    
   <div key={index}>
    <Link to={`/productdetails/${item.id}`} className='div-link' >
    <div className='card'>
     <div className='image-container'><Image src={item.img} className='crd-img' thumbnail width="220px" alt=''/><button className='like-btn' onClick={()=>{HandleClick(item)}}>{Wishlist.includes(item) ? <img src={like} className='like-state-img' height="30px" width="30px" alt=''/>:<img src={unlike}  height="30px" width="30px" alt=''/>}</button></div>
     <div className='crd-brand'><mark>{item.brand}</mark></div>
     <div className='crd-stoke'>Stoke - <kbd>{item.stoke}</kbd></div>
     <div className='crd-model'>{item.model}</div>
     <div className='crd-rate'>Rate - INR {item.rate}</div>
     
     
     </div>
     </Link>
   </div>
    ))}
    
  </div>
  </div>
  )
}
