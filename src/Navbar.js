import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky-top bg-white navbaR'>
        <div className="flex standard_width">
            <Link className='logoContentContaIner' to={"/home"}>
                <img src="/Images/kids multicultural logo 2.png" alt="" />
            </Link>
            <div className="left_auto flex right_nav">
                <span>
                    <Link to={"/about"}>
                        About
                    </Link>
                </span>
                <span>
                    <Link to={"/kids"}>
                        Kids
                    </Link>
                </span>
                <span>
                    <div className="hover_Effect">
                        <Link to={"/shop"}>
                            Shop
                        </Link>
                        <samp>
                            <img src="https://img.icons8.com/material-outlined/20/null/expand-arrow--v1.png"/>
                        </samp>
                        <div className='hover_Effect2'>
                            <div className="drop_Down_container text-dark shadow_sm">
                                <p>
                                    <Link to={"/hoodies-n-shirts"}>
                                        Hoodie
                                    </Link>
                                </p>
                                <p>
                                    <Link to={"/hair-bonnets"}>
                                        Hair Burnet
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </span>
                <span>
                    <Link to={"/magazines"}>
                        Magazines
                    </Link>
                </span>
                <span>
                    <div className="hover_Effect">
                        <Link to={"/classes"}>
                            Classes
                        </Link>
                        <samp className='saxm'>
                            <img src="https://img.icons8.com/material-outlined/20/null/expand-arrow--v1.png"/>
                        </samp>
                        <div className='hover_Effect3'>
                            <div className="drop_Down_container text-dark shadow_sm">
                                <p>
                                    <Link to={"/modelling-classes"}>
                                        Modelling
                                    </Link>
                                </p>
                                <p>
                                    <Link to={"/acting-classes"}>
                                        Acting
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </span>
                <span>
                    <Link to={"/events"}>
                        Events
                    </Link>
                </span>
                <div className='left_auto'>
                    <Link to={"/cart"} className="px_1 relative">
                        <img src="https://img.icons8.com/pastel-glyph/20/null/shopping-cart--v2.png"/>
                        <div className="cartValue">
                            1
                        </div>
                    </Link>
                    <Link to={"/login"} className="px_2 login_btn">
                        Login
                    </Link>
                    <Link to={"/sign-up"} className="ml_1 sign_up_btn">
                        Sign Up
                    </Link>
                    <samp>
                        <img src="https://img.icons8.com/material-sharp/24/3491E8/multiline-text.png"/>
                    </samp>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar