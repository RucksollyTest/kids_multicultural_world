import React from 'react'
import Footer from './Footer'
import ListBonnets from './ListBonnets'
import Navbar from './Navbar'

const Bonnets = () => {
  return (
    <div>
        <Navbar />
        <div className="standard_width">
            <div className="mageHeaderss">
                <div className="pt_05 font_20 bold6 text-white">
                    Kids Multicultural World Designers Hoodies and T-shirts
                </div>
            </div>
            <div className="pt_5">
                <ListBonnets />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Bonnets