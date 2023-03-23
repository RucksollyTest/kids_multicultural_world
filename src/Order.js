import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import SideBar from './SideBar'

const Order = () => {
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
                                    My Orders
                                </div>
                                <div className=" pointer bold8 blue pb_3">
                                    Filter
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="font_15 bold7">
                                    Kids Multicultural Hoodie
                                </div>
                                <div className="font_14 text-success">
                                    $50
                                </div>
                                <div className="font_12 bold6 text-muted">
                                    Jan 12,2024
                                </div>
                            </div>
                            
                        </div>
                        <div></div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Order