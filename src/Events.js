import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer'

const Events = () => {
    return (
        <div>
            <div className='standard_width haefa'>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <div className="aboutLander2fx">
                            <div className="font_40 bold8 text-white mt_7 center">
                                Chicago Kids Multicultural Festival
                            </div>
                            <div className='font_22 center bold6 py_1 text-white'>
                                Enhancing and bringing out kids talents.
                            </div>
                            <div className="center text-white font_14 bold7">
                                12-02-2023
                            </div>
                            <div className='center pt_1'>
                                <Link to={"/events-details"} className="aboutSign_upBtn">
                                    Get Tickets
                                </Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="aboutLander2fx x_2">
                            <div className="font_40 bold8 text-white mt_7 center">
                                Chicago Kids Multicultural Festival
                            </div>
                            <div className='font_22 center bold6 py_1 text-white'>
                                Enhancing and bringing out kids talents.
                            </div>
                            <div className="center text-white font_14 bold7">
                                12-02-2023
                            </div>
                            <div className='center pt_1'>
                                <Link to={"/events-details"} className="aboutSign_upBtn">
                                    Get Tickets
                                </Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="aboutLander2fx x_3">
                            
                            <div className="font_40 mt_7 bold8 text-white center">
                                KIDS MULTICULTURAL WORLD
                            </div>
                            <div className='font_22 center bold6 py_1 text-white'>
                                Enhancing and bringing out kids talents.
                            </div>
                            <div className="center text-white font_14 bold7">
                                12-02-2023
                            </div>
                            <div className='center pt_1'>
                                <Link to={"/events-details"} className="aboutSign_upBtn">
                                    Get Tickets
                                </Link>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='pt_7'>
                    <div className="font_28 bold6">
                        Upcoming Events
                    </div>
                    <div className="eventGridContainer">
                        <div className='evntCont shadow_sm'>
                            <div>
                                <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                            </div>
                            <div className="p-3">
                                <div className="bold7">
                                    Chicago Kids Multicultural Festival
                                </div>
                                <div className="red font_14 bold6">
                                    12-02-2023
                                </div>
                                <div className="font_14 text-muted pt_1">
                                    Cakewalk Chicago • Chicago, IL
                                </div>
                                <div className="text-success bold8">
                                    $ 100
                                </div>
                                <div className="pt_1">
                                    <Link to={"/events-details"} className="upcoming_Eevent_btn">
                                        Get Ticket
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='evntCont shadow_sm'>
                            <div>
                                <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                            </div>
                            <div className="p-3">
                                <div className="bold7">
                                    Chicago Kids Multicultural Festival
                                </div>
                                <div className="red font_14 bold6">
                                    12-02-2023
                                </div>
                                <div className="font_14 text-muted pt_1">
                                    Cakewalk Chicago • Chicago, IL
                                </div>
                                <div className="text-success bold8">
                                    $ 100
                                </div>
                                <div className="pt_1">
                                    <Link to={"/events-details"} className="upcoming_Eevent_btn">
                                        Get Ticket
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='evntCont shadow_sm'>
                            <div>
                                <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                            </div>
                            <div className="p-3">
                                <div className="bold7">
                                    Chicago Kids Multicultural Festival
                                </div>
                                <div className="red font_14 bold6">
                                    12-02-2023
                                </div>
                                <div className="font_14 text-muted pt_1">
                                    Cakewalk Chicago • Chicago, IL
                                </div>
                                <div className="text-success bold8">
                                    $ 100
                                </div>
                                <div className="pt_1">
                                    <Link to={"/events-details"} className="upcoming_Eevent_btn">
                                        Get Ticket
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='evntCont shadow_sm'>
                            <div>
                                <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                            </div>
                            <div className="p-3">
                                <div className="bold7">
                                    Chicago Kids Multicultural Festival
                                </div>
                                <div className="red font_14 bold6">
                                    12-02-2023
                                </div>
                                <div className="font_14 text-muted pt_1">
                                    Cakewalk Chicago • Chicago, IL
                                </div>
                                <div className="text-success bold8">
                                    $ 100
                                </div>
                                <div className="pt_1">
                                    <Link to={"/events-details"} className="upcoming_Eevent_btn">
                                        Get Ticket
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events