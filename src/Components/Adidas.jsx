import React, { useState } from 'react'
import myContext from './Context'
import { useContext } from 'react'
import Image from 'react-bootstrap/Image';
import { Link ,useNavigate} from 'react-router-dom';
import '../Styles/Filter.css'
import like from '../Pictures/likes.png'
import unlike from '../Pictures/unlike.png'
export default function Adidas() {
    const {Data,Wishlist,setWishlist,carddata,setCarddata,loginstats} = useContext(myContext)
    const [pricefilteredData,setpricefilteredData] = useState([])
    const navigate = useNavigate()
    const datafilter =  Data.filter((element)=>{return(element.brand === "ADIDAS")})
   
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
    //   const handleData = (card) =>{
    //     console.log("card",card)
    //   carddata.splice(0,1)
    //     setCarddata([...carddata,card])
    //  }
    const SortsL = () => {
      const filters = [...datafilter];
      let swapped;
  
      do {
          swapped = false;
  
          for (let i = 0; i < filters.length - 1; i++) {
              if (parseInt(filters[i].rate) > parseInt(filters[i + 1].rate)) {
                  const temp = filters[i];
                  filters[i] = filters[i + 1];
                  filters[i + 1] = temp;
                  swapped = true; // Set the flag to true if a swap occurred
              }
          }
  
      } while (swapped); // Repeat the loop until no swaps are made
  
      console.log("finalsort", filters);
      setpricefilteredData(filters);
  };

  const SortsH = () => {
    const filters = [...datafilter];
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < filters.length - 1; i++) {
            if (parseInt(filters[i].rate) < parseInt(filters[i + 1].rate)) {
                const temp = filters[i];
                filters[i] = filters[i + 1];
                filters[i + 1] = temp;
                swapped = true; // Set the flag to true if a swap occurred
            }
        }

    } while (swapped); // Repeat the loop until no swaps are made

    console.log("finalsort", filters);
    setpricefilteredData(filters);
};
  
  
  return (
    <>
   {pricefilteredData.length > 0 ? <>
    <div className='filter-container'>
    <div className='filters-contain'><button className='sort-btn1' onClick={()=>{SortsL()}}>Sort L-H</button>
    <button className='sort-btn2' onClick={()=>{SortsH()}}>Sort H-L</button></div>
    <div className='card-container'>

      {pricefilteredData.map((item,index)=>(
      
     <div key={index}>
       <Link to={`/productdetails/${item.id}`} className='div-link'>
      <div className='card'>
       <div><Image src={item.img} className='crd-img' thumbnail width="220px" /><button className='like-btn' onClick={(e)=>{HandleClick(item)
         e.preventDefault();}}>{Wishlist.includes(item) ? <img src={like} className='like-state-img' height="30px" width="30px"/>:<img src={unlike}  height="30px" width="30px"/>}</button></div>
       <div className='crd-brand'><mark>{item.brand}</mark></div>
       <div className='crd-stoke'>Stoke - <kbd>{item.stoke}</kbd></div>
       <div className='crd-model'>{item.model}</div>
       <div className='crd-rate'>INR {item.rate}</div>
       
       
       </div>
       </Link>
    
     </div>
     
      ))}
      
    </div>
    </div>
   
   </> :<>
   <div className='filter-container'>
    <div className='filters-contain'><button className='sort-btn1' onClick={()=>{SortsL()}}>Sort L-H</button>
    <button className='sort-btn2' onClick={()=>{SortsH()}}>Sort H-L</button></div>
    
    <div className='card-container'>

      {datafilter.map((item,index)=>(
      
     <div key={index}>
       <Link to={`/productdetails/${item.id}`} className='div-link'>
      <div className='card'>
       <div><Image src={item.img} className='crd-img' thumbnail width="220px" /><button className='like-btn' onClick={(e)=>{HandleClick(item)
         e.preventDefault();}}>{Wishlist.includes(item) ? <img src={like} className='like-state-img' height="30px" width="30px"/>:<img src={unlike}  height="30px" width="30px"/>}</button></div>
       <div className='crd-brand'><mark>{item.brand}</mark></div>
       <div className='crd-stoke'>Stoke - <kbd>{item.stoke}</kbd></div>
       <div className='crd-model'>{item.model}</div>
       <div className='crd-rate'>INR {item.rate}</div>
       
       
       </div>
       </Link>
    
     </div>
     
      ))}
      
    </div>
    </div>
   
   
   </>}

    </>
  )
}
