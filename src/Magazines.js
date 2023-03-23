import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Magazines = () => {
    return (
        <div>
            <Navbar />
            <div className="standard_width">
                <div className="mageHeader">
                    <div className="pt_05 font_20 bold6 text-white">
                        Get featured in upcoming magazine
                    </div>
                    <div className='left_auto'>
                        <Link to={"/home"} className="upcoming_mag_Btn2">
                            Get Started
                        </Link>
                    </div>
                    
                </div>
                <div className="magazin_covers">
                    <Link to={"/home"}>
                        <div className='mag shadow'>
                            <img src="/Images/IMG_8509.jpg" alt="" />
                            <div className="p-3">
                                <div className="font_12 bold5 text-muted">
                                    12-02-2023                            
                                </div>
                                <div className="font_15 bold6">
                                    January 1st Edition
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/home"}>
                        <div className='mag shadow'>
                            <img src="/Images/IMG_8509.jpg" alt="" />
                            <div className="p-3">
                                <div className="font_12 bold5 text-muted">
                                    12-02-2023                            
                                </div>
                                <div className="font_15 bold6">
                                    January 1st Edition
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/home"}>
                        <div className='mag shadow'>
                            <img src="/Images/IMG_8509.jpg" alt="" />
                            <div className="p-3">
                                <div className="font_12 bold5 text-muted">
                                    12-02-2023                            
                                </div>
                                <div className="font_15 bold6">
                                    January 1st Edition
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/home"}>
                        <div className='mag shadow'>
                            <img src="/Images/IMG_8509.jpg" alt="" />
                            <div className="p-3">
                                <div className="font_12 bold5 text-muted">
                                    12-02-2023                            
                                </div>
                                <div className="font_15 bold6">
                                    January 1st Edition
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/home"}>
                        <div className='mag shadow'>
                            <img src="/Images/IMG_8509.jpg" alt="" />
                            <div className="p-3">
                                <div className="font_12 bold5 text-muted">
                                    12-02-2023                            
                                </div>
                                <div className="font_15 bold6">
                                    January 1st Edition
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/home"}>
                        <div className='mag shadow'>
                            <img src="/Images/IMG_8509.jpg" alt="" />
                            <div className="p-3">
                                <div className="font_12 bold5 text-muted">
                                    12-02-2023                            
                                </div>
                                <div className="font_15 bold6">
                                    January 1st Edition
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Magazines