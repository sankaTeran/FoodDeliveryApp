import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowlogin}) =>{

    const [menu,setMenu] =useState("Menu");
    const {getTotalCartAmount} =useContext(StoreContext);


  return (
    <div>
      <div className="navBar">
      <Link to='/' ><img src={assets.logo} alt=""  className="logo"/></Link>
        <ul className="nabar_Menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
            <a href='#footer' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>            
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>sigin in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
