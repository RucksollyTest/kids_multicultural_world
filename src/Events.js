import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer'
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import DateFormatter from './DateFormatter';
import { eventAction } from './Action';

const Events = () => {

    const dispatch= useDispatch()
    const eventt = useSelector(state => state.eventt)
    const {loading,error,eventt:even} = eventt

    useEffect(()=>{
        dispatch(eventAction())
    },[])

    return (
        <div>
            <Navbar />
            <div className='standard_width haefa'>
                <Carousel>
                    {even && even.slice(0, 3).map(x=>(
                        <Carousel.Item interval={3000} key={x.id}>
                            <div className="aboutLander2fx">
                                <div className="font_40 bold8 text-white mt_7 center">
                                    {x.name}
                                </div>
                                <div className='font_22 center bold6 py_1 text-white minWidthCarosel'>
                                    {x.brief_description}
                                </div>
                                <div className="center text-white font_14 bold7">
                                    <DateFormatter date={x.event_date} />
                                </div>
                                <div className='center pt_1'>
                                    <Link to={`/events-details/${x.id}`} className="aboutSign_upBtn">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                    
                </Carousel>
                <div className='pt_7'>
                    <div className="font_28 bold6">
                        Upcoming Events
                    </div>
                    <div className="eventGridContainer">
                        {even && even.map(x=>(
                            <div className='evntCont shadow_sm'>
                                <div>
                                    <Link to={`/events-details/${x.id}`}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}${x.cover_image}`} alt="" />
                                    </Link>
                                </div>
                                <div className="p-3">
                                    <div className="bold7">
                                        {x.name}
                                    </div>
                                    <div className="red font_14 bold6">
                                        <DateFormatter date={x.date} />
                                    </div>
                                    <div className="font_14 text-muted pt_1">
                                        {x.brief_location1} • {x.brief_location2}
                                    </div>
                                    <div className="text-success bold8">
                                        $ {x.price}
                                    </div>
                                    <div className="pt_1">
                                        <Link to={`/events-details/${x.id}`} className="upcoming_Eevent_btn">
                                            Get Ticket
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events