import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const { pathname } = useLocation();
    const [showNav, setShowNav] = useState()
    const [isScrolled, setScrolled] = useState((window.scrollY != 0))
    useEffect(()=>{
         setShowNav(false)
    },[pathname])
    if (window.innerWidth > 1024) {
        window.addEventListener('scroll', () => {
            setScrolled((window.scrollY != 0))
        })
    }
    return (
        <header className={isScrolled ? 'sticky-header' : 'header'} >
            <div className="logo">
                <Link to='/' >آب مقطر پاکاب تبریز</Link>
                <p>Tabriz Pakab Deionize Water</p>
            </div>
            {window.innerWidth <= 1024 &&
                <div className={showNav ? 'menu-icon-active' : 'menu-icon'} onClick={()=>setShowNav(!showNav)}>
                    <span>
                    </span>
                    <span>
                    </span>
                    <span>
                    </span>
                </div>
            }
            <div className="navbar" style={{ display: `${(window.innerWidth > 1024) ? 'flex' : showNav ? 'flex' : 'none'}` }} >
                <Link to='/'>خانه</Link>
                <Link to='/store'>محصولات</Link>
                <Link to='/contact'>تماس با ما</Link>
                <Link to='/about-us'>درباره ما</Link>
            </div>
            {/* <div className="search">
            
            </div> */}
        </header>
    )
}
