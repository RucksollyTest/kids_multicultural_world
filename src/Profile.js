import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import SideBar from './SideBar'

const Profile = () => {
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className='pt_1'></div>
            <div className='mainContent shadow'>
                <DashboardNav />
                <div className='mainContentDashboardsubs'>
                    <div className="mainContentDashboardsubsContainer">
                        <div className='profileImageContainer'>
                            <img src="/Images/KleopatraA-Z-Vargas.jpeg" alt="" />
                        </div>
                        <div className="profileInfoContainer">
                            <div className="font_38 bold8 border-bottom pb_3">
                                Kleopatra A-Z Vargas
                            </div>
                            <div className="pt_3">
                                <span className="bold8 font_20">
                                    Appearance:
                                </span>
                                <div className='pt_1'>
                                    Female <span className="bold8">* eyes</span> Brown <span className="bold8"> * hair</span> Brown <span className="bold8">* height</span> 4' 2'' <span className="bold8">* weight</span> 50 lbs <span className="bold8">* dress size</span> 6 
                                </div>
                            </div>
                            <div className='pt_2'>
                                <span className="bold8 font_20 pr_1">Age:</span>
                                7 y.o.
                            </div>
                            <div className="pt_2">
                                <span className="bold8 font_20 pr_1">
                                    Ethnicity: 
                                </span>
                                Latino / Hispanic
                            </div>
                            <div className="pt_2">
                                <span className="bold8 font_20 pr_1">
                                    Social Media: 
                                </span>
                                <div className='pt_2'>
                                    <img src="https://img.icons8.com/color/35/null/twitter-squared.png"/>
                                    <img className='mx-2' src="https://img.icons8.com/color/35/null/whatsapp--v1.png"/>
                                    <img src="https://img.icons8.com/color/35/null/facebook-new.png"/>
                                    <img className='mx-2' src="https://img.icons8.com/ios-filled/35/FF0000/youtube-squared.png"/>
                                    <img src="https://img.icons8.com/color/35/null/imdb.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="padProfilexds">
                            <div>
                                <span className="bold8 font_20">
                                    Talents:
                                </span>
                            </div>
                            <div className='pt_1 profileSkills'>
                                <div className='bold6 m-2'>
                                    Dancing
                                </div>
                                <div className='bold6 m-2'>
                                    Singing
                                </div>
                                <div className='bold6 m-2'>
                                    Acting
                                </div>
                                <div className='bold6 m-2'>
                                    Dancing
                                </div>
                            </div>
                            <div className='pt_2'>
                                <Link to={"/home"} className="blue bold6">
                                    Edit my profile
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt_9 pt_6 border-top">
                        <div className="bold8 font_24">
                            Photos
                        </div>
                        <div className="pt_3">
                            <div className="profilePhotosContainer">
                                <div>
                                    <img src="/Images/KleopatraA-Z-Vargas.jpeg" alt="" />
                                </div>
                                <div>
                                    <img src="/Images/KleopatraA-Z-Vargas.jpeg" alt="" />
                                </div>
                                <div>
                                    <img src="/Images/KleopatraA-Z-Vargas.jpeg" alt="" />
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt_6 border-top"></div>
                    <div className="pt_5">
                        <div className="bold8 font_24">
                            Video
                        </div>
                        <div className="profileVideoContainer">
                            <div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wl6KTIgpEyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wl6KTIgpEyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wl6KTIgpEyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="mt_6 border-top"></div>
                    <div className="pt_5 mb_5">
                        <div className="bold8 font_24">
                            Remarks/Achievements
                        </div>
                        <div className="profileRemarkContainer">
                            <div className='shadow-sm PVContainer'>
                                <div className="font_20 bold7">
                                    Cover Girl
                                </div>
                                <div className="pt_05">
                                    By Kids Multicultural World
                                </div>
                                <div className="pt_05 font_12 bold7 text-muted">
                                    Feb.2023
                                </div>
                                <div className="my_2 border-top"></div>
                                <div className="font_15">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique saepe autem. Magnam molestias quisquam, incidunt vel officia suscipit. Nostrum eius ut quasi quo, impedit magni omnis illo error sequi!
                                </div>
                            </div>
                            <div className='shadow-sm PVContainer'>
                                <div className="font_20 bold7">
                                    Cover Girl
                                </div>
                                <div className="pt_05">
                                    At Kids Multicultural World
                                </div>
                                <div className="pt_05 font_12 bold7 text-muted">
                                    Feb.2023
                                </div>
                                <div className="my_2 border-top"></div>
                                <div className="font_15">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique saepe autem. Magnam molestias quisquam, incidunt vel officia suscipit. Nostrum eius ut quasi quo, impedit magni omnis illo error sequi!
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile