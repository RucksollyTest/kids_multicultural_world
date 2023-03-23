import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import SideBar from './SideBar'

const Dashboard = () => {
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className='pt_1'></div>
            <div className='mainContent shadow'>
                <DashboardNav />
                <div className='mainContentDashboard'>
                    <div>
                        <div>
                            <Link to={"/home"}>
                                <div className="plansContainerInfos shadow-sm relative">
                                    <div className="p-2">
                                        <div className="font_16 bold6 center">
                                            DANCING CLASS
                                        </div>
                                        <div className='center'>
                                            <span className="font_28 bold7 blue">
                                                $50
                                            </span>
                                            <span className="font_16 bold7">
                                                /mth
                                            </span>
                                        </div>
                                        <div className=" bold7 font_14 center">
                                            Sundays 2pm(spa)
                                        </div>
                                        <div className="pt_1">
                                            <Link to={"/home"} className="subscribe_btns bold7 recolor">
                                                Enrol
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="pt_2">
                            <Link to={"/home"}>
                                <div className="plansContainerInfos shadow-sm relative">
                                    <div className="p-2">
                                        <div className="font_16 bold6 center">
                                            ACTING CLASS
                                        </div>
                                        <div className='center'>
                                            <span className="font_28 bold7 blue">
                                                $50
                                            </span>
                                            <span className="font_16 bold7">
                                                /mth
                                            </span>
                                        </div>
                                        <div className=" bold7 font_14 center">
                                            Sundays 2pm(spa)
                                        </div>
                                        <div className="pt_1">
                                            <Link to={"/home"} className="subscribe_btns bold7 recolor">
                                                Enrol
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <span className="font_20 bold6">
                                Magazines
                            </span>
                            <Link to={"/magazines"} className="blue left_auto font_12 pt_05 bold7">
                                View all
                            </Link>
                        </div>
                        <div className="magazineDashboardContainer pointer"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div className='border-bottom'>
                                <div className="font_12 bold7">
                                    Kids Multicultural World January Edition
                                </div>
                                <span className='bold6 font_12 text-dark'>
                                    Released date :
                                </span>
                                <span className="pl_1 bold6 font_12 text-muted">
                                    Jan 12, 2023
                                </span>
                                <div className=" bold6 text-success">
                                    $50
                                </div>
                            </div>
                        </div>
                        <div className="magazineDashboardContainer pointer"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div className='border-bottom'>
                                <div className="font_12 bold7">
                                    Kids Multicultural World January Edition
                                </div>
                                <span className='bold6 font_12 text-dark'>
                                    Released date :
                                </span>
                                <span className="pl_1 bold6 font_12 text-muted">
                                    Jan 12, 2023
                                </span>
                                <div className=" bold6 text-success">
                                    $50
                                </div>
                            </div>
                        </div>
                        <div className="magazineDashboardContainer pointer"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div className='border-bottom'>
                                <div className="font_12 bold7">
                                    Kids Multicultural World January Edition
                                </div>
                                <span className='bold6 font_12 text-dark'>
                                    Released date :
                                </span>
                                <span className="pl_1 bold6 font_12 text-muted">
                                    Jan 12, 2023
                                </span>
                                <div className=" bold6 text-success">
                                    $50
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <span className="font_20 bold6">
                                Events
                            </span>
                            <Link to={"/events"} className="blue left_auto font_12 pt_05 bold7">
                                View all
                            </Link>
                        </div>
                        <div className="eventDashboardContainer pointer border-bottom"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div >
                                <div className="font_12 bold7">
                                    Kids Multicultural World Event
                                </div>
                                <span className='bold6 font_11 text-dark'>
                                    Price and Date :
                                </span>
                                <span className="pl_1 text-success bold6 font_14">
                                    $60
                                </span>
                                <span className="pl_1 bold6 font_11 text-muted">
                                    , Jan 12, 2023
                                </span>
                                <div className=" font_11 bold8 text-dark">
                                    Las Vegas
                                </div>
                            </div>
                        </div>
                        <div className="eventDashboardContainer pointer border-bottom"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div >
                                <div className="font_12 bold7">
                                    Kids Multicultural World Event
                                </div>
                                <span className='bold6 font_11 text-dark'>
                                    Price and Date :
                                </span>
                                <span className="pl_1 text-success bold6 font_14">
                                    $60
                                </span>
                                <span className="pl_1 bold6 font_11 text-muted">
                                    , Jan 12, 2023
                                </span>
                                <div className=" font_11 bold8 text-dark">
                                    Las Vegas
                                </div>
                            </div>
                        </div>
                        <div className="eventDashboardContainer pointer border-bottom"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div >
                                <div className="font_12 bold7">
                                    Kids Multicultural World Event
                                </div>
                                <span className='bold6 font_11 text-dark'>
                                    Price and Date :
                                </span>
                                <span className="pl_1 text-success bold6 font_14">
                                    $60
                                </span>
                                <span className="pl_1 bold6 font_11 text-muted">
                                    , Jan 12, 2023
                                </span>
                                <div className=" font_11 bold8 text-dark">
                                    Las Vegas
                                </div>
                            </div>
                        </div>
                        <div className="eventDashboardContainer pointer border-bottom"
                            onClick={()=>window.location.href="tradewaid.com"}
                        >
                            <div>
                                <img src="/Images/IMG_8509.jpg" alt="" />
                            </div>
                            <div >
                                <div className="font_12 bold7">
                                    Kids Multicultural World Event
                                </div>
                                <span className='bold6 font_11 text-dark'>
                                    Price and Date :
                                </span>
                                <span className="pl_1 text-success bold6 font_14">
                                    $60
                                </span>
                                <span className="pl_1 bold6 font_11 text-muted">
                                    , Jan 12, 2023
                                </span>
                                <div className=" font_11 bold8 text-dark">
                                    Las Vegas
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bootDesign">
                    <div className='bootContent'>
                        <Link to={"/home"}>
                            <div className="plansContainerInfo shadow-sm">
                                <div className="spand shadow-sm">
                                    <div></div>
                                </div>
                                <div className="pt_1 ml_2">
                                    <div className="bold6 font24">
                                        Product Plan tier one
                                    </div>
                                    <div>
                                        <Link to={"/home"} className="subscribe_btn">
                                            <span className="font_14 bold6 text-muted">
                                                Read more
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/home"}>
                            <div className="plansContainerInfo shadow-sm">
                                <div className="spand shadow-sm">
                                    <div></div>
                                </div>
                                <div className="pt_1 ml_2">
                                    <div className="bold6 font24">
                                        Product Plan tier one
                                    </div>
                                    <div>
                                        <Link to={"/home"} className="subscribe_btn">
                                            <span className="font_14 bold6 text-muted">
                                                Read more
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/home"} className="active">
                            <div className="plansContainerInfo shadow-sm">
                                <div className="spand shadow-sm">
                                    <div></div>
                                </div>
                                <div className="pt_1 ml_2">
                                    <div className="bold6 font24">
                                        Product Plan tier one
                                    </div>
                                    <div>
                                        <Link to={"/home"} className="subscribe_btn">
                                            <span className="font_14 bold6 text-muted">
                                                Unsubscribe
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="ClassicItemsSales">
                        <img src="/Images/HairBonnets.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard