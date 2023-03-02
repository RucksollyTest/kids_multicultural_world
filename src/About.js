import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='standard_width'>
            <div className="aboutLander">
                <div>
                    <div className="font_40 bold8 text-white">
                        KIDS MULTICULTURAL WORLD
                    </div>
                    <div className='font_22 bold6 py_2 text-white'>
                        Enhancing and bringing out kids talents. 
                    </div>
                    <div>
                        <Link to={"/sign_up"} className="aboutSign_upBtn">
                            Enrol Now
                        </Link>
                    </div>
                </div>
                <div className='flex'>
                    <div className='enrol_mag_container'>
                        <div className="font_12 bold7 text-white">
                            Magazine + Fashion
                        </div>
                        <div className="mt_2 font_24 bold7 text-white">
                            Get featured in upcoming magazine
                        </div>
                        <div className='mt_2'>
                            <Link to={"/home"} className="upcoming_mag_Btn">
                                Get Started
                            </Link>
                        </div>
                        <div className='mt_1'>
                            <Link to={"/magazines"}>
                                <ul className='ulMag'>
                                    <li className="text-white">
                                        View magazines
                                    </li>
                                </ul>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt_5">
                <div className="font_24 bold7">
                    Featured Topics
                </div>
            </div>
            <div className="mt_4">
                <div className="featured_contents">
                    <div>
                        <div>
                            
                        </div>
                        <div className="mt_2 bold7">
                            Magazines
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About