import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'


const EventsDetails = () => {
  return (
    <div>
        <Navbar />
        <div className="standard_width">
            <div className="eventImgContainer">
                <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
            </div>
            <div className="pt_4">
                <div className="pb_1 bold8 font_20">
                    Jun 24
                </div>
                <Link to={"/home"} className='eventIckets_btn'>
                    Get Ticket $50
                </Link>
            </div>
            <div className="standardEvent">
                <div className="mt_7 bold6 font_28">
                    Chicago Kids Multicultural Festival
                </div>
                <div className="pt_3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet modi soluta est qui blanditiis impedit enim commodi, consequuntur, fugit facilis culpa eaque veniam! Mollitia nulla expedita sint nesciunt alias?
                </div>
                <div className="mt_3 bold6 font_24">
                    When and where
                </div>
                <div className="flex pt_4">
                    <div className="shadow p-4">
                        <img src="https://img.icons8.com/cotton/34/null/overtime--v2.png"/>
                        <div className="pt_1">
                            <div className="font_18 bold7">
                                Date and time
                            </div>
                            <div className="text-muted font_14 pt_2">
                                Sat, June 24, 2023,
                            </div>
                            <div className="text-muted font_14">
                                4:00 PM – 7:00 PM CDT
                            </div>
                        </div>
                    </div>
                    <div className="shadow p-4 ml_2">
                        <img src="https://img.icons8.com/fluency/34/null/map-marker.png"/>
                        <div className="pt_1">
                            <div className="font_18 bold7">
                                Location
                            </div>
                            <div className="text-muted font_14 pt_2">
                                Tinley Park Convention Center 18451 Convention Center Dr Tinley Park, IL 60477 United States
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt_5 bold6 font_24">
                    More Info About Event
                </div>
                <div className="mt_2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem debitis temporibus, numquam possimus molestias, accusamus laborum, sint rerum quos libero odio magnam nisi sequi reiciendis pariatur dicta deserunt a quam!
                </div>
                <div className="mt_2">
                    <div className='pb_2'>
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                    </div>
                    <div className='pb_2'>
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                    </div>
                    <div className='pb_2'>
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default EventsDetails