import React from 'react'
import { Link } from 'react-router-dom'

const Acting = () => {
  return (
    <div>
        <div className='modelling'>
            <div className="first_side2 ">
                <div className="first_sideContent">
                    <div className="font_12 bold7 text-dark">
                        CLASSES
                    </div>
                    <div className="ModelsHeaderCont_ents">
                        Acting Class
                    </div>
                    <div className="pt_2 font_14">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam earum natus eveniet quam, minus dolorum officiis dicta quas, adipisci eligendi ex doloribus tempora assumenda? Odit expedita unde impedit atque laboriosam.
                    </div>
                    <Link to={"/home"} className="modeling_BTN3">
                        Join Class $40
                    </Link>
                </div>
                
            </div>
            <div className="second_side">
                <div className="second_sideContent">
                    <img src="/DelImages/chuttersnap-Q_KdjKxntH8-unsplash (1).jpg" alt="" />
                    <Link to={"/home"} className="modeling_BTN5">
                        <img src="https://img.icons8.com/sf-regular/48/ffffff/long-arrow-right.png"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Acting