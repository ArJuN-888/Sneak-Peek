import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Home.css';

import adds from '../Pictures/adds.png'
import converse from '../Pictures/converse.png'
import fia from '../Pictures/fila.png'
import croc from '../Pictures/croc.png'
import like from '../Pictures/likes.png'
import unlike from '../Pictures/unlike.png'
import Image from 'react-bootstrap/Image';
import { useContext} from 'react';

import { Link,useNavigate} from 'react-router-dom';
import a from '../Pictures/1.jpg'
import b from '../Pictures/2.jpg'
import c from '../Pictures/3.jpg'
import d from '../Pictures/4.jpg'
import e from '../Pictures/5.jpg'
import f from '../Pictures/6.jpg'

import h from '../Pictures/8.jpg'
import myContext from './Context';

export default function Home() {
    const {Data,Wishlist,setWishlist,loginstats} = useContext(myContext)
  const navigate = useNavigate()
    console.log("addedtocart",Wishlist)
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
    <>
   <div className='brand-linkbody'>
  
  <div className='brand-sub'>
   <Link className='brand-link pt-3' to="/Adidas"><img className='brand-im '  src={adds} alt="didas" style={{width:"80px"}} /></Link>
   <Link className='brand-link pt-1 ' to="/Bata"><img  className='brand-im' src="https://hindubabynames.info/wp-content/themes/hbn_download/download/clothing-and-accessories-companies/bata-logo.png" alt='bata' style={{width:"100px"}} /></Link>
   <Link className='brand-link pt-4 ' to="/Nike"><img  className='brand-im' src="https://logohistory.net/wp-content/uploads/2023/02/Nike-Logo.png" alt='nike' style={{width:"80px"}} /></Link>
   <Link  className='brand-link' to="/"><img  className='brand-im ' src={converse} alt='converse' style={{width:"100px"}} /></Link>
   <Link className='brand-link mt-1 ' to="/"><img  className='brand-im' src="https://static.vecteezy.com/system/resources/previews/022/100/836/original/puma-logo-transparent-free-png.png" alt='puma' style={{width:"100px",marginRight:"28px"}} /></Link>
   <Link className='brand-link pt-3' to="/"><img  className='brand-im' src={croc} alt='croc' style={{width:"60px",marginRight:"30px"}} /></Link>
   <Link className='brand-link' to="/"><img  className='brand-im' src="https://i0.wp.com/mynicefootwear.com/wp-content/uploads/2022/02/Sparx.png?fit=300%2C300&ssl=1" alt='sparx' style={{width:"100px",padding:"4px"}} /></Link>
   <Link className='brand-link p-2' to="/"><img  className='brand-im' src={fia} alt='fila' style={{width:"100px"}} /></Link>
   </div>

 </div>
    <Carousel data-bs-theme="white" className="carousel-body">
      <Carousel.Item className="caro-hold">
 
        <img className="caro-im" src={a} alt="First slide" />
        <Carousel.Caption >
          {/* <h5 className='caro-hdtxt'>First slide label</h5> */}
          {/* <p className='caro-txt'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="caro-hold">
        <img className="caro-im" src={b} alt="Second slide" />
        <Carousel.Caption>
          {/* <h5 className='caro-hdtxt'>Second slide label</h5> */}
          {/* <p className='caro-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="caro-hold">
        <img className="caro-im" src={c} alt="Third slide" />
        <Carousel.Caption>
          {/* <h5 className='caro-hdtxt'>Third slide label</h5> */}
          {/* <p className='caro-txt'>Praesent commodo cursus magna, vel scelerisque nisl.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro-hold">
        <img className="caro-im" src={d} alt="Third slide" />
        <Carousel.Caption>
          {/* <h5 className='caro-hdtxt'>Fourth slide label</h5> */}
          {/* <p className='caro-txt'>Praesent commodo cursus magna, vel scelerisque nisl.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro-hold">
        <img className="caro-im" src={e} alt="Third slide" />
        <Carousel.Caption>
          {/* <h5 className='caro-hdtxt'>Third slide label</h5> */}
          {/* <p className='caro-txt'>Praesent commodo cursus magna, vel scelerisque nisl.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro-hold">
        <img className="caro-im" src={f} alt="Third slide" />
        <Carousel.Caption>
          {/* <h5 className='caro-hdtxt'>Third slide label</h5> */}
          {/* <p className='caro-txt'>Praesent commodo cursus magna, vel scelerisque nisl.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro-hold">
        <img className="caro-im " src={h} alt="Third slide" />
        <Carousel.Caption>
          {/* <h5 className='caro-hdtxt'>Third slide label</h5> */}
          {/* <p className='caro-txt'>Praesent commodo cursus magna, vel scelerisque nisl.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
     
   
      <div className="marquee-container">
  <div className="marquee-inner">
    <div className="content">
      New Arrivals + Check out our latest shoe collection! | + New arrivals every week! | + Great discounts on top brands! |
       + Free shipping on orders over INR 1000! |
    </div>
  </div>
</div>

    <div className='card-container'>
      
      {Data.map((item,index)=>(
     
     <div key={index}>
      
      <div className='card'>
      <Link to={`/productdetails/${item.id}`} className='div-link' >
       <div className='image-container'><Image src={item.img}  className='crd-img' thumbnail width="220px" /><button className='like-btn' onClick={(e)=>{HandleClick(item)
        e.preventDefault();}}>{Wishlist.includes(item) ? <img src={like} className='like-state-img' alt='filled' width="30px"/>:<img src={unlike} alt='bordered'   width="30px"/>}</button></div>
       <div className='crd-brand col-sm-12'><mark>{item.brand}</mark></div>
       <div className='crd-stoke col-sm-12'>Stoke-left - <kbd>{item.stoke}</kbd></div>
       <div className='crd-model col-sm-12'>{item.model}</div>
       <div className='crd-rate col-sm-12'>INR {item.rate}</div>
    
       </Link>
       </div>
      
     </div>
      ))}
      
    </div>
  {/* <div className='btmcontainer'>
<ul className='ulist'>
<li className='btm'>ⒸSneak-Peek </li>
  <li className='btm'>Mail - sneakpeek888@gmail.com </li>

 
</ul>
    </div> */}
    </>
  );
}
