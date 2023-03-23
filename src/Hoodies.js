import React from 'react'
import Footer from './Footer'
import ListHoodies from './ListHoodies'
import Navbar from './Navbar'

const Hoodies = () => {
  return (
    <div>
        <Navbar />
        <div className="standard_width">
            <div className="mageHeader">
                <div className="pt_05 font_20 bold6 text-white">
                    Kids Multicultural World Designers Hoodies and T-shirts
                </div>
            </div>
            <div className="pt_5">
                <ListHoodies />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Hoodies