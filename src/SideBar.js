import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="navSideBar">
        <div className='sideBarIconcontainer'>
            <div className="iconsConts">
                <div>
                    <Link to={"/home"}>
                        <img src="https://img.icons8.com/sf-black-filled/44/ffffff/home-page.png"/>
                    </Link>
                </div>
                <div>
                    <Link to={"/dashboard"}>
                        <img src="https://img.icons8.com/ios-filled/38/ffffff/squared-menu.png"/>
                    </Link>
                </div>
                <div>
                    <Link to={"/profile"}>
                        <img src="https://img.icons8.com/ios-filled/38/ffffff/name.png"/>
                    </Link>
                </div>
                <div>
                    <Link to={"/tickets"}>
                        <img src="https://img.icons8.com/ios-filled/38/ffffff/ticket.png"/>
                    </Link>
                </div>
                <div>
                    <Link to={"/orders"}>
                        <img src="https://img.icons8.com/ios-filled/38/ffffff/package-delivery-logistics.png"/>
                    </Link>
                </div>
                <div>
                    <Link to={"/settings"}>
                        <img src="https://img.icons8.com/ios-filled/38/ffffff/settings.png"/>
                    </Link>
                </div>
                <div>
                    <Link to={"/home"}>
                        <img src="https://img.icons8.com/ios-filled/38/ffffff/logout-rounded.png"/>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SideBar