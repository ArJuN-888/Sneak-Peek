import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/admindash.css'
export default function AdminDashboard() {
  return (
    <div className='na-header'>
    <div className='navbar navbar-expand-lg navmain'>
     <div className='container-fluid'>
        <label className='brand'>Admin-Panel</label>
        <ul className='navbar-nav'>
            <li className='nav-item '><Link className='lok' to="/Addcard">Addproduct</Link></li>
            <li className='nav-item'><Link className='lok' to="/Usermanagement">Usermanagement</Link></li>
            <li className='nav-item'><Link className='lok' to="/Editcard">editproduct</Link></li>
        </ul>
     </div>

    </div>
    </div>
  )
}
