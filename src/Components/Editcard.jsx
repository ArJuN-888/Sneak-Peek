import React from 'react'
import myContext from './Context'
import { Image } from 'react-bootstrap'
import { useState,useContext } from 'react'


export default function Editcard() {
    const {Data,setData,cart,setCart,Wishlist,setWishlist,carddata,setCarddata} = useContext(myContext)
    

    const [Index,setIndex] =useState(-1)
    console.log("cardadded",Data)

const [errorcount,seterrorcount] = useState({})
console.log("signup",carddata)
const handleChange = (field,value) =>{
  setCarddata({...carddata,[field]:value})


 
}
const Updatedcardata = {
  id: parseInt(carddata.id),
  brand : carddata.brand.toUpperCase(),
  model : carddata.model,
  rate : parseInt(carddata.rate),
  stoke : parseInt(carddata.stoke),
  img : carddata.img,
  quantity: parseInt(carddata.quantity),
  description : carddata.description
}

const handleClick = () =>{
    const errors = validate(Updatedcardata)
    seterrorcount(errors)
  if(Object.keys(errors).length === 0){
    setData([...Data,Updatedcardata])
    setCarddata({  id:"",  brand:"",
    model:"",
    rate:"",
    stoke:"",
    img:"",
    quantity:"",
    description:""})
  }
}
const validate = (crd) =>{
  const error = {}
  if(!crd.id)
  {
    error.ids = "id  required..."
  }
  if(!crd.brand)
  {
    error.brand = "brand name required..."
  }
  if(!crd.model)
  {
    error.model = "model name required..."
  }
  if(!crd.rate)
  {
    error.rate = "rate required..."
  }
  if(!crd.stoke)
  {
    error.stoke = "stock count required..."
  }
  if(!crd.img)
  {
    error.img = "img url required..."
  }
  if(!crd.quantity)
  {
    error.quantity = "Initial quantity is required"
  }
  if(!crd.description)
  {
    error.description = "description required..."
  }
  return error
}
const Delete = (obj) =>{
  setCart(cart.filter((element)=>(element.id !== obj.id)))
  setWishlist(Wishlist.filter((element)=>(element !== obj)))
  const deletedarray = Data.filter((element)=>{return(element !== obj)})
 
  setData(deletedarray)
}


const handleEdit = (index) => {
  setIndex(index);
  setCarddata(Data[index]);
};

const handleSave = (index) => {
  const updatedData = [...Data];
  updatedData[index] = carddata;
  setData(updatedData);
  setIndex(-1);
  setCarddata({
    id:"",
    brand: '',
    model: '',
    rate: '',
    stoke: '',
    img: '',
    quantity:"",
    description: '',
  });
  alert("Successfully Updated")
};
const handleCancel = () => {
  setIndex(-1);
  setCarddata({
    id:"",
    brand: '',
    model: '',
    rate: '',
    stoke: '',
    img: '',
    quantity:"",
    description: '',
  });
};

  return (
    <>
     <div className="admin-main">
    
       
         <div>
          
          <div className='form-container'>
         <div className='form-container-sub'>
      <div className='form-div'>
         <p className='form-title'>🅴🅳🅸🆃 🅿🆁🅾🅳🆄🅲🆃</p>
         <div className='inputonly-container'>
<input value={carddata.id} placeholder='Id..' type='number' className='input' onChange={(e)=>handleChange("id",e.target.value)}  />
<p  className='caution'>{errorcount.ids}</p>
</div>
         <div className='inputonly-container'>
<input value={carddata.quantity} placeholder='Initial quantity..' type='number' className='input' onChange={(e)=>handleChange("quantity",e.target.value)}  />
<p  className='caution'>{errorcount.quantity}</p>
</div>
         <div className='inputonly-container'>
<input value={carddata.brand}placeholder='Brand..' className='input' onChange={(e)=>handleChange("brand",e.target.value)}  />
<p  className='caution'>{errorcount.brand}</p>
</div>
<div className='inputonly-container'>
<input value={carddata.model}placeholder='Model...' className='input' onChange={(e)=>handleChange("model",e.target.value)}  />
<p  className='caution'>{errorcount.model}</p>
</div>
<div className='inputonly-container'>
<input value={carddata.rate}placeholder='Rate...' className='input' onChange={(e)=>handleChange("rate",e.target.value)}  />
<p  className='caution'>{errorcount.rate}</p>
</div>
<div className='inputonly-container'>
<input value={carddata.stoke} placeholder='Stoke...' className='input' onChange={(e)=>handleChange("stoke",e.target.value)}  />
<p  className='caution'>{errorcount.stoke}</p>
</div>
<div className='inputonly-container'>
<input value={carddata.img}placeholder='Image url..' className='input' onChange={(e)=>handleChange("img",e.target.value)}  />
<p  className='caution'>{errorcount.img}</p>
</div>
<div className='inputonly-container'>
<input value={carddata.description} placeholder='Description...' className='input' onChange={(e)=>handleChange("description",e.target.value)}  />
<p  className='caution'>{errorcount.description}</p>
</div>
{Index === -1 ? (
                  <button className="frm-btn" onClick={() => handleClick()}>
                    Submit
                  </button>
                ) : (
                  <>
                    <button className="frm-btn" onClick={() => handleSave(Index)}>
                      Save
                    </button>
                    <button className="frm-btn" onClick={handleCancel}>
                      Cancel
                    </button>
                  </>
                )}

    </div>
    </div>
    </div>
    </div>
 
    
            
         
     
      
       </div>
    
    
      
       <div className='card-container'>
      
      {Data.map((item,index)=>(
     
     <div key={index}>
     
      <div className='card'>
       <div className='image-container'><Image src={item.img} className='crd-img' thumbnail width="220px" /></div>
       <div className='crd-brand col-sm-12'><mark>{item.brand}</mark></div>
       <div className='crd-stoke col-sm-12'>Stoke-left - <kbd>{item.stoke}</kbd></div>
       <div className='crd-model col-sm-12'>{item.model}</div>
       <div className='crd-rate col-sm-12'>INR {item.rate}</div>
    <div className='button-container-admin'>
         <button className='admin1-btn' onClick={()=>{Delete(item)}}>Delete</button>
          <button className='admin2-btn' onClick={() => handleEdit(index)}>Edit</button>
          </div>
       </div>
       
     </div>
      ))}
      
    </div>
       
  </>
  )
}
