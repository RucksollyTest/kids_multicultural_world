import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import SideBar from './SideBar'

const Tickests = () => {
  return (
    <div>
        <div>
            <SideBar />
        </div>
        <div className='pt_1'></div>
            <div className='mainContent shadow'>
                <DashboardNav />
                <div className='mainContentDashboardsubs'>
                    <div className="DashboardTicketsContainer">
                        <div>
                            <div>
                                <div className="font_28 bold6">
                                    My Event Tickets
                                </div>
                                <div className=" pointer bold8 blue pb_3">
                                    Filter
                                </div>
                            </div>
                            <div className="tickets">
                                <div className="font_15 bold7">
                                    Las Vega Kids Multicultural Event Lorem, ipsum dolor sit amet consectetur adipisicing.
                                </div>
                                <div className="font_14 text-muted">
                                    22 Event center las vegas
                                </div>
                                <div className="font_12 bold6 text-muted">
                                    2pm, Jan 12,2024
                                </div>
                            </div>
                            <div className="tickets">
                                <div className="font_15 bold7">
                                    Las Vega Kids Multicultural Event Lorem, ipsum dolor sit amet consectetur adipisicing.
                                </div>
                                <div className="font_14 text-muted">
                                    22 Event center las vegas
                                </div>
                                <div className="font_12 bold6 text-muted">
                                    2pm, Jan 12,2024
                                </div>
                            </div>
                            <div className="tickets">
                                <div className="font_15 bold7">
                                    Las Vega Kids Multicultural Event Lorem, ipsum dolor sit amet consectetur adipisicing.
                                </div>
                                <div className="font_14 text-muted">
                                    22 Event center las vegas
                                </div>
                                <div className="font_12 bold6 text-muted">
                                    2pm, Jan 12,2024
                                </div>
                            </div>
                            <div className="tickets">
                                <div className="font_15 bold7">
                                    Las Vega Kids Multicultural Event Lorem, ipsum dolor sit amet consectetur adipisicing.
                                </div>
                                <div className="font_14 text-muted">
                                    22 Event center las vegas
                                </div>
                                <div className="font_12 bold6 text-muted">
                                    2pm, Jan 12,2024
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

                </div>
            </div>
        </div>
  )
}

export default Tickests