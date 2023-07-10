import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { magazineAction } from './Action'
import DateFormatter from './DateFormatter'

const Magazines = () => {
    const dispatch= useDispatch()
    const magazine = useSelector(state => state.magazine)
    const {loading,error,magazines} = magazine

    useEffect(()=>{
        dispatch(magazineAction())
    },[])
    return (
        <div>
            <Navbar />
            <div className="standard_width">
                <div className="mageHeader">
                    <div className="pt_05 font_20 bold6 text-white">
                        MAGAZINES
                    </div>
                    {/* <div className='left_auto'>
                        <Link to={"/home"} className="upcoming_mag_Btn2">
                            Get Started
                        </Link>
                    </div> */}
                    
                </div>
                <div className="magazin_covers">
                    {magazines && 
                        magazines.map(x =>(
                            <a href={`${x.link}`} target='_blank'>
                                <div className='mag shadow'>
                                    <img src={`${process.env.REACT_APP_BASE_URL}${x.cover_image}`} alt={x.name} />
                                    <div className="p-3">
                                        <div className="font_12 bold5 text-muted">
                                            <DateFormatter date={x.date} />                           
                                        </div>
                                        <div className="font_15 bold6">
                                            {x.name}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Magazines