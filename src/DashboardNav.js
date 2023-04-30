import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
  return (
    <div className='navbarStickyTop sticky-top bg-white'>
        <div className='dashNavs'>
            <div>
                <Link className='logoContentContaIner' to={"/home"}>
                    <img src="/Images/kids multicultural logo 2.png" alt="" />
                </Link>
            </div>
            <div className="left_auto flex">
                <div className="dashNavLinks">
                    <Link to={"/home"} className="bold6 blue">
                        Classes
                    </Link>
                </div>
                <div className="dashNavLinks">
                    <Link to={"/home"} className="bold6 blue">
                        Events
                    </Link>
                </div>
                <div className="dashNavLinks">
                    <Link to={"/home"} className="bold6 blue">
                        Magazines
                    </Link>
                </div>
                <div className="px_2">
                    <div className="iconser shadow-sm possitionIconizer">
                        <Link to={"/cart"} className="relative">
                            <img src="https://img.icons8.com/pastel-glyph/30/null/shopping-cart--v2.png"/>
                            <div className="cartValue">
                                1
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='px_1'>
                    <img className='iconser shadow-sm' src="/Images/c20a4a_e89814ef8a0e4f37b814a5f37fb4d8cf_mv2.webp" alt="" />
                </div>
                <Link to={"/cart"} className="px_1 relative cativ">
                    <img src="https://img.icons8.com/pastel-glyph/20/null/shopping-cart--v2.png"/>
                    <div className="cartValue">
                        1
                    </div>
                </Link>
                <samp className='pl_1'>
                    <img src="https://img.icons8.com/material-sharp/24/3491E8/multiline-text.png"/>
                </samp>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav