import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const About = () => (
    <div>
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
                    ABOUT US
                </div>
            </div>
            <div className='mt_4'>
                <p className="font_20">
                    The Kids Multicultural World is a cultural activism, Fashion , Modeling and Acting Academy focused on Uniting a diverse Nation of Kids ages 0 month - 17 years.
                </p>
                <p className="font_20">
                    We produce a bimonthly magazine, online Modeling & acting classes and host annual Kids
                    Multicultural Fashion Shows & Festivals Worldwide.
                </p>
                <p className="font_20">
                    We educate Kids to take pride in
                    cultural heritage ,bring more awareness to multiculturalism to end discrimination, bullying and segregation- understanding the importance of self-growth, building skills, and capitalizing on their individual talents.
                </p>
                <p className="font_20">
                    This organization was founded on May 1st, 2017 by CEO .Queen Amb. Dr. Krystal Okeke’Chanchangi. A global
                    cultural activist and voice for the next generation. The
                    Ceo is focused on eliminating discrimination, bullying, and segregation.
                </p>
                <p className="font_20">
                    <span className="red">Mission :</span> Uniting a Diverse Nation
                </p>
            </div>
        </div>
        <Footer />
    </div>
)

export default About