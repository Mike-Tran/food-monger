import React from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'

function MainNavigation() {
  return (
    <nav className="navbarContainer">
        <div className="navbar-logo-container">
            {/* <h1 className="navbar-logo text-center">Food Monger</h1> */}
            {/* <div className="separator p2-text"></div> */}
            {<h6>Create your recipe and share it to the world!</h6>}
        </div>

        {/* <ul>
            {MenuItems.map((item, index) => { 
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul> */}
    </nav>
  )
}

export default MainNavigation