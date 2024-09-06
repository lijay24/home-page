import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
import user from '../../assets/user.png';
import heart from '../../assets/heart.png';
import cart from '../../assets/cart.png';
import search from '../../assets/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [nav, SetNav]=useState(false);
  return (
    <div className='p-5 flex justify-between lg:ml-14 lg:mr-10'>
    <header className='flex items-center'>
        <img src={logo} alt="logo"  className='mr-2 w-9'/>
        <p className='text-xl font-bold'>Furniro</p>
           </header>
           <DesktopMode/>
<IconNav/>
           <button className='md:hidden'  onClick={ () => SetNav((s) => !s)}><FontAwesomeIcon icon={faBars} size='2xl'/>
            </button>
           {nav && <MobileNav />}
    </div>
  )
}
const MobileNav = () => {
    return(
        <div className='fixed bg-yellow-600 text-black w-1/2  z-30 left-0 h-full transition ease-in-out top-16'>
            <ul className='w-1/2 text-2xl grid gap-5 font-bold mx-auto my-0 mt-10'>
            <li> <a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>
    )
}
const DesktopMode = () => {
    return(
            <ul className='md:flex gap-10 text-xl font-bold hidden'>
            <li> <a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    )
}
const IconNav = () => {
    return(
        <main className='hidden md:flex gap-10'>
            <article>
                <a href="">
                    <img src={user} alt="user" />
                </a>
            </article>
            <article>
                <a href="">
                    <img src={search} alt="search" />
                </a>
            </article>
            <article>
                <a href="">
                    <img src={heart} alt="heart" />
                </a>
            </article>
            <article>
                <a href="">
                    <img src={cart} alt="cart" />
                </a>
            </article>
    
        </main>
    )
}



export default Header
